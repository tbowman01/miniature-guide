# User Flow Diagrams
# Quantum Marketplace Exchange

This document contains Mermaid diagrams for all major user flows in the Quantum Marketplace Exchange platform.

---

## Table of Contents

1. [User Registration & Onboarding](#1-user-registration--onboarding)
2. [Product Search & Discovery](#2-product-search--discovery)
3. [Product Purchase Flow](#3-product-purchase-flow)
4. [Selling a Product](#4-selling-a-product)
5. [Messaging Flow](#5-messaging-flow)
6. [Review & Rating Flow](#6-review--rating-flow)
7. [Order Management](#7-order-management)
8. [Dispute Resolution](#8-dispute-resolution)

---

## 1. User Registration & Onboarding

### New User Registration

```mermaid
flowchart TD
    Start([User Visits Site]) --> Landing[Homepage]
    Landing --> Decision1{Already has<br/>account?}

    Decision1 -->|Yes| Login[Login Page]
    Decision1 -->|No| Register[Registration Page]

    Register --> InputInfo[Enter:<br/>- Email<br/>- Username<br/>- Password<br/>- Name]
    InputInfo --> Validate{Valid input?}

    Validate -->|No| Error1[Show validation errors]
    Error1 --> InputInfo

    Validate -->|Yes| Submit[Submit registration]
    Submit --> EmailSent[Verification email sent]
    EmailSent --> CheckEmail[Check email inbox]

    CheckEmail --> VerifyLink[Click verification link]
    VerifyLink --> EmailVerified[Email verified ✓]

    EmailVerified --> SetupProfile[Complete profile:<br/>- Avatar<br/>- Bio<br/>- Location]
    SetupProfile --> Enable2FA{Enable 2FA?}

    Enable2FA -->|Yes| Setup2FA[Setup authenticator app]
    Setup2FA --> Verified2FA[2FA enabled ✓]
    Enable2FA -->|No| Skip2FA[Skip for now]

    Verified2FA --> Welcome[Welcome to dashboard]
    Skip2FA --> Welcome

    Login --> EnterCreds[Enter credentials]
    EnterCreds --> Check2FA{2FA enabled?}

    Check2FA -->|Yes| Enter2FA[Enter 2FA code]
    Enter2FA --> Verify2FA{Code valid?}
    Verify2FA -->|No| Error2FA[Invalid code]
    Error2FA --> Enter2FA
    Verify2FA -->|Yes| Welcome

    Check2FA -->|No| CheckCreds{Credentials<br/>valid?}
    CheckCreds -->|No| ErrorLogin[Invalid credentials]
    ErrorLogin --> EnterCreds
    CheckCreds -->|Yes| Welcome

    Welcome --> End([Dashboard])

    style Start fill:#e1f5ff
    style End fill:#c8e6c9
    style Error1 fill:#ffcdd2
    style Error2FA fill:#ffcdd2
    style ErrorLogin fill:#ffcdd2
```

### Social Login Flow

```mermaid
flowchart TD
    Start([Homepage]) --> SocialBtn[Click social login button]
    SocialBtn --> Provider{Select provider}

    Provider -->|Google| Google[Google OAuth]
    Provider -->|Facebook| Facebook[Facebook Login]
    Provider -->|Apple| Apple[Sign in with Apple]

    Google --> Authorize[Authorize app]
    Facebook --> Authorize
    Apple --> Authorize

    Authorize --> CheckAccount{Account<br/>exists?}

    CheckAccount -->|Yes| Login[Login successful]
    CheckAccount -->|No| CreateAccount[Create account with<br/>social profile data]

    CreateAccount --> CompleteProfile[Complete additional info]
    CompleteProfile --> Login

    Login --> Dashboard([Dashboard])

    style Start fill:#e1f5ff
    style Dashboard fill:#c8e6c9
```

---

## 2. Product Search & Discovery

### Search Flow

```mermaid
flowchart TD
    Start([Homepage/Any Page]) --> SearchAction{User action}

    SearchAction -->|Types in search| Query[Enter search query]
    SearchAction -->|Clicks category| Category[Select category]
    SearchAction -->|Browses trending| Trending[View trending products]

    Query --> Autocomplete[Show autocomplete<br/>suggestions]
    Autocomplete --> SelectSuggestion{Select<br/>suggestion?}

    SelectSuggestion -->|Yes| ExecuteSearch[Execute search]
    SelectSuggestion -->|No| ContinueTyping[Continue typing]
    ContinueTyping --> Query

    Category --> ExecuteSearch
    Trending --> ExecuteSearch

    ExecuteSearch --> Results[Display search results]
    Results --> CheckResults{Results<br/>found?}

    CheckResults -->|No| NoResults[Show no results message]
    NoResults --> Suggestions[Show suggestions:<br/>- Check spelling<br/>- Try different keywords<br/>- Browse categories]
    Suggestions --> Retry{Try again?}
    Retry -->|Yes| Query
    Retry -->|No| EndSearch([Exit search])

    CheckResults -->|Yes| ShowProducts[Display product grid]
    ShowProducts --> UserAction{User action}

    UserAction -->|Apply filters| Filters[Select filters:<br/>- Price range<br/>- Condition<br/>- Location<br/>- Shipping]
    Filters --> RefineResults[Refine results]
    RefineResults --> ShowProducts

    UserAction -->|Sort| Sort[Select sort:<br/>- Recent<br/>- Price low-high<br/>- Price high-low<br/>- Popular<br/>- Rating]
    Sort --> ReorderResults[Reorder results]
    ReorderResults --> ShowProducts

    UserAction -->|Click product| ProductDetail[Go to product page]
    UserAction -->|Save search| SaveSearch[Save search criteria]
    UserAction -->|Quick view| QuickView[Open quick view modal]

    QuickView --> QuickAction{Action?}
    QuickAction -->|Add to cart| AddCart[Add to cart]
    QuickAction -->|View details| ProductDetail
    QuickAction -->|Close| ShowProducts

    AddCart --> ShowProducts
    ProductDetail --> End([Product Detail Page])
    SaveSearch --> ShowProducts

    style Start fill:#e1f5ff
    style End fill:#c8e6c9
    style EndSearch fill:#c8e6c9
    style NoResults fill:#fff3e0
```

### Product Discovery

```mermaid
flowchart TD
    Start([User on Homepage]) --> Discovery{Discovery method}

    Discovery -->|Featured| Featured[View featured products]
    Discovery -->|Trending| Trending[View trending products]
    Discovery -->|Recommended| Recommended[View AI recommendations]
    Discovery -->|Recently viewed| Recent[View recently viewed]

    Featured --> ProductGrid[Product grid display]
    Trending --> ProductGrid
    Recommended --> ProductGrid
    Recent --> ProductGrid

    ProductGrid --> Interact{User interaction}

    Interact -->|Hover| Preview[Show quick info overlay]
    Preview --> ProductGrid

    Interact -->|Click product| ProductPage[Go to product page]
    Interact -->|Favorite| AddFavorite[Add to favorites ♥]
    AddFavorite --> Updated[Update UI with heart icon]
    Updated --> ProductGrid

    Interact -->|Load more| LoadMore[Load more products]
    LoadMore --> ProductGrid

    ProductPage --> End([Product Detail Page])

    style Start fill:#e1f5ff
    style End fill:#c8e6c9
```

---

## 3. Product Purchase Flow

### Complete Purchase Journey

```mermaid
flowchart TD
    Start([Product Detail Page]) --> Decision{User decision}

    Decision -->|Add to cart| AddCart[Click 'Add to Cart']
    Decision -->|Buy now| BuyNow[Click 'Buy Now']
    Decision -->|Message seller| Message[Open messaging]

    AddCart --> SelectOptions{Product has<br/>variants?}
    SelectOptions -->|Yes| ChooseVariant[Select:<br/>- Color<br/>- Size<br/>- Storage]
    ChooseVariant --> ValidateSelection{Valid<br/>selection?}
    ValidateSelection -->|No| ErrorVariant[Show error: select all options]
    ErrorVariant --> ChooseVariant
    ValidateSelection -->|Yes| CartAdded

    SelectOptions -->|No| CartAdded[Item added to cart ✓]
    CartAdded --> ShowNotification[Show success notification]
    ShowNotification --> ContinueShopping{Continue<br/>shopping?}

    ContinueShopping -->|Yes| Browse([Continue browsing])
    ContinueShopping -->|No| GoToCart[Go to cart]

    BuyNow --> GoToCart

    GoToCart --> CartPage[Shopping Cart Page]
    CartPage --> ReviewCart[Review cart items]
    ReviewCart --> CartAction{Action?}

    CartAction -->|Update quantity| UpdateQty[Change quantity]
    UpdateQty --> RecalculateCart[Recalculate totals]
    RecalculateCart --> CartPage

    CartAction -->|Remove item| RemoveItem[Remove from cart]
    RemoveItem --> RecalculateCart

    CartAction -->|Apply coupon| ApplyCoupon[Enter coupon code]
    ApplyCoupon --> ValidateCoupon{Valid<br/>coupon?}
    ValidateCoupon -->|No| ErrorCoupon[Invalid coupon]
    ErrorCoupon --> CartPage
    ValidateCoupon -->|Yes| ApplyDiscount[Apply discount]
    ApplyDiscount --> RecalculateCart

    CartAction -->|Proceed| CheckAuth{Logged in?}

    CheckAuth -->|No| LoginPrompt[Prompt to login/register]
    LoginPrompt --> LoginFlow[Login flow]
    LoginFlow --> Checkout

    CheckAuth -->|Yes| Checkout[Checkout: Shipping]

    Checkout --> AddressForm{Has saved<br/>address?}
    AddressForm -->|Yes| SelectAddress[Select saved address]
    AddressForm -->|No| EnterAddress[Enter new address]

    SelectAddress --> ValidateAddress
    EnterAddress --> ValidateAddress{Valid<br/>address?}

    ValidateAddress -->|No| ErrorAddress[Show address errors]
    ErrorAddress --> EnterAddress
    ValidateAddress -->|Yes| ShippingMethod[Select shipping method:<br/>- Standard<br/>- Express<br/>- Overnight]

    ShippingMethod --> Payment[Checkout: Payment]
    Payment --> PaymentMethod{Select method}

    PaymentMethod -->|Credit card| CardDetails[Enter card details:<br/>- Number<br/>- Expiry<br/>- CVV]
    PaymentMethod -->|PayPal| PayPalFlow[PayPal redirect]
    PaymentMethod -->|Crypto| CryptoFlow[Crypto payment]

    CardDetails --> ValidateCard{Valid card?}
    ValidateCard -->|No| ErrorCard[Card validation error]
    ErrorCard --> CardDetails
    ValidateCard -->|Yes| Review

    PayPalFlow --> Review
    CryptoFlow --> Review

    Review[Checkout: Review Order]
    Review --> ShowSummary[Display:<br/>- Items<br/>- Shipping<br/>- Tax<br/>- Total]
    ShowSummary --> Confirm{Confirm<br/>purchase?}

    Confirm -->|No| EditOrder{Edit what?}
    EditOrder -->|Cart| CartPage
    EditOrder -->|Shipping| Checkout
    EditOrder -->|Payment| Payment

    Confirm -->|Yes| ProcessPayment[Process payment]
    ProcessPayment --> PaymentStatus{Payment<br/>successful?}

    PaymentStatus -->|No| PaymentError[Payment failed]
    PaymentError --> RetryPayment{Retry?}
    RetryPayment -->|Yes| Payment
    RetryPayment -->|No| Failed([Payment cancelled])

    PaymentStatus -->|Yes| CreateOrder[Create order in system]
    CreateOrder --> SendConfirmation[Send confirmation email]
    SendConfirmation --> OrderConfirmed[Order Confirmation Page]
    OrderConfirmed --> ShowDetails[Display:<br/>- Order number<br/>- Delivery estimate<br/>- Tracking info]

    ShowDetails --> NextAction{Next action?}
    NextAction -->|Track order| TrackOrder([Track Order Page])
    NextAction -->|Continue shopping| ContinueShop([Homepage])
    NextAction -->|View orders| OrderHistory([Order History])

    Message --> End([Messaging Page])

    style Start fill:#e1f5ff
    style Browse fill:#c8e6c9
    style TrackOrder fill:#c8e6c9
    style ContinueShop fill:#c8e6c9
    style OrderHistory fill:#c8e6c9
    style Failed fill:#ffcdd2
    style End fill:#c8e6c9
    style ErrorVariant fill:#ffcdd2
    style ErrorCoupon fill:#ffcdd2
    style ErrorAddress fill:#ffcdd2
    style ErrorCard fill:#ffcdd2
    style PaymentError fill:#ffcdd2
```

---

## 4. Selling a Product

### Create Product Listing

```mermaid
flowchart TD
    Start([Seller Dashboard]) --> CreateListing[Click 'Sell Item' or<br/>'New Listing']
    CreateListing --> ListingForm[Product Listing Form]

    ListingForm --> UploadPhotos[Upload product photos]
    UploadPhotos --> CheckPhotos{Valid photos?<br/>Min 1, Max 10}
    CheckPhotos -->|No| PhotoError[Show photo errors:<br/>- File size<br/>- Format<br/>- Dimensions]
    PhotoError --> UploadPhotos
    CheckPhotos -->|Yes| BasicInfo

    BasicInfo[Enter basic information:<br/>- Title<br/>- Description<br/>- Category<br/>- Condition]
    BasicInfo --> ValidateBasic{Valid input?}
    ValidateBasic -->|No| BasicError[Show validation errors]
    BasicError --> BasicInfo
    ValidateBasic -->|Yes| Pricing

    Pricing[Set pricing:<br/>- Price<br/>- Original price<br/>- Quantity]
    Pricing --> Shipping[Configure shipping:<br/>- Methods<br/>- Costs<br/>- Free shipping<br/>- Local pickup]

    Shipping --> Variants{Add<br/>variants?}
    Variants -->|Yes| AddVariants[Add variants:<br/>- Colors<br/>- Sizes<br/>- Options]
    AddVariants --> Preview
    Variants -->|No| Preview

    Preview[Preview listing]
    Preview --> ReviewAction{Action?}
    ReviewAction -->|Edit| EditSection{What to edit?}
    EditSection -->|Photos| UploadPhotos
    EditSection -->|Info| BasicInfo
    EditSection -->|Pricing| Pricing
    EditSection -->|Shipping| Shipping

    ReviewAction -->|Save draft| SaveDraft[Save as draft]
    SaveDraft --> DraftSaved[Draft saved ✓]
    DraftSaved --> ReturnDashboard([Return to Dashboard])

    ReviewAction -->|Publish| Publish[Publish listing]
    Publish --> ValidateComplete{All required<br/>fields complete?}
    ValidateComplete -->|No| MissingFields[Show missing fields]
    MissingFields --> EditSection

    ValidateComplete -->|Yes| ProcessListing[Create listing in system]
    ProcessListing --> IndexSearch[Index for search]
    IndexSearch --> SendNotification[Notify followers]
    SendNotification --> Success[Listing published! ✓]

    Success --> NextAction{Next action?}
    NextAction -->|View listing| ViewListing([Product Page])
    NextAction -->|Share| ShareListing[Share on social media]
    ShareListing --> Shared[Listing shared ✓]
    Shared --> ReturnDashboard
    NextAction -->|Create another| CreateListing
    NextAction -->|Done| ReturnDashboard

    style Start fill:#e1f5ff
    style ReturnDashboard fill:#c8e6c9
    style ViewListing fill:#c8e6c9
    style PhotoError fill:#ffcdd2
    style BasicError fill:#ffcdd2
    style MissingFields fill:#ffcdd2
```

### Manage Listing

```mermaid
flowchart TD
    Start([Seller Dashboard]) --> Listings[View My Listings]
    Listings --> SelectListing[Select a listing]

    SelectListing --> Actions{Action?}

    Actions -->|Edit| EditListing[Edit listing details]
    EditListing --> UpdateForm[Update information]
    UpdateForm --> SaveChanges[Save changes]
    SaveChanges --> Updated[Listing updated ✓]
    Updated --> Listings

    Actions -->|Duplicate| Duplicate[Duplicate listing]
    Duplicate --> NewListing[Create copy with<br/>same details]
    NewListing --> EditNew[Edit new listing]
    EditNew --> Listings

    Actions -->|Deactivate| ConfirmDeactivate{Confirm<br/>deactivate?}
    ConfirmDeactivate -->|No| Listings
    ConfirmDeactivate -->|Yes| Deactivate[Mark as inactive]
    Deactivate --> HideFromSearch[Remove from search results]
    HideFromSearch --> Listings

    Actions -->|Delete| ConfirmDelete{Confirm<br/>delete?}
    ConfirmDelete -->|No| Listings
    ConfirmDelete -->|Yes| CheckOrders{Has active<br/>orders?}
    CheckOrders -->|Yes| CannotDelete[Cannot delete:<br/>active orders exist]
    CannotDelete --> Listings
    CheckOrders -->|No| Delete[Delete listing]
    Delete --> Deleted[Listing deleted ✓]
    Deleted --> Listings

    Actions -->|View stats| ViewStats[View analytics:<br/>- Views<br/>- Favorites<br/>- Messages<br/>- Conversion]
    ViewStats --> Listings

    Actions -->|Promote| Promote[Promote listing:<br/>- Featured<br/>- Sponsored]
    Promote --> PaymentPromo[Select promotion plan]
    PaymentPromo --> ProcessPayment[Process payment]
    ProcessPayment --> Promoted[Listing promoted ✓]
    Promoted --> Listings

    style Start fill:#e1f5ff
    style Listings fill:#c8e6c9
    style CannotDelete fill:#ffcdd2
```

---

## 5. Messaging Flow

### Start Conversation

```mermaid
flowchart TD
    Start([Product Page or<br/>User Profile]) --> InitMessage[Click 'Message Seller'<br/>or 'Contact']

    InitMessage --> CheckAuth{Logged in?}
    CheckAuth -->|No| LoginPrompt[Prompt to login]
    LoginPrompt --> Login[Login flow]
    Login --> CheckConvo

    CheckAuth -->|Yes| CheckConvo{Existing<br/>conversation?}

    CheckConvo -->|Yes| OpenExisting[Open existing conversation]
    CheckConvo -->|No| NewConvo[Create new conversation]

    NewConvo --> MessageWindow[Message window]
    OpenExisting --> MessageWindow

    MessageWindow --> ShowContext[Show context:<br/>- Product info<br/>- User profile<br/>- Previous messages]

    ShowContext --> ComposeMessage[Type message]
    ComposeMessage --> AddMedia{Add media?}

    AddMedia -->|Yes| AttachFile[Attach:<br/>- Images<br/>- Documents]
    AttachFile --> ValidateFile{Valid file?}
    ValidateFile -->|No| FileError[File error:<br/>- Too large<br/>- Invalid format]
    FileError --> AttachFile
    ValidateFile -->|Yes| SendMessage

    AddMedia -->|No| SendMessage[Click send]

    SendMessage --> Validate{Valid<br/>message?}
    Validate -->|No| EmptyError[Cannot send empty message]
    EmptyError --> ComposeMessage

    Validate -->|Yes| DeliverMessage[Deliver message via WebSocket]
    DeliverMessage --> UpdateUI[Update UI:<br/>- Message sent ✓<br/>- Timestamp<br/>- Read status]

    UpdateUI --> WaitResponse[Wait for response]

    WaitResponse --> CheckReply{Received<br/>reply?}
    CheckReply -->|Yes| Notification[Show notification]
    Notification --> DisplayReply[Display reply in chat]
    DisplayReply --> MarkRead[Mark as read]
    MarkRead --> WaitResponse

    CheckReply -->|No| UserAction{User action?}

    UserAction -->|Send another| ComposeMessage
    UserAction -->|Make offer| SendOffer[Send price offer]
    SendOffer --> ComposeMessage
    UserAction -->|View product| ViewProduct([Product Page])
    UserAction -->|Block user| BlockUser[Block user]
    BlockUser --> BlockConfirm{Confirm?}
    BlockConfirm -->|Yes| Blocked[User blocked]
    Blocked --> End([Conversation List])
    BlockConfirm -->|No| WaitResponse
    UserAction -->|Close| End

    style Start fill:#e1f5ff
    style End fill:#c8e6c9
    style ViewProduct fill:#c8e6c9
    style FileError fill:#ffcdd2
    style EmptyError fill:#ffcdd2
```

### Real-time Messaging

```mermaid
flowchart TD
    Start([Messages Page]) --> ConvoList[Display conversation list]
    ConvoList --> SelectConvo[Select conversation]

    SelectConvo --> LoadMessages[Load message history]
    LoadMessages --> DisplayThread[Display conversation thread]

    DisplayThread --> WebSocket[Establish WebSocket<br/>connection]
    WebSocket --> ListenEvents[Listen for events]

    ListenEvents --> EventType{Event type}

    EventType -->|new-message| NewMessage[Receive new message]
    NewMessage --> CheckSender{From current<br/>conversation?}
    CheckSender -->|Yes| AddToThread[Add to thread]
    AddToThread --> PlaySound[Play notification sound]
    PlaySound --> AutoScroll[Auto-scroll to bottom]
    AutoScroll --> SendReadReceipt[Send read receipt]
    SendReadReceipt --> ListenEvents

    CheckSender -->|No| UpdateBadge[Update unread badge]
    UpdateBadge --> ShowNotif[Show toast notification]
    ShowNotif --> ListenEvents

    EventType -->|typing| ShowTyping[Show 'typing...' indicator]
    ShowTyping --> ListenEvents

    EventType -->|read| UpdateStatus[Update message status:<br/>'Read ✓✓']
    UpdateStatus --> ListenEvents

    EventType -->|user-online| UpdateOnline[Update user status:<br/>'● Online']
    UpdateOnline --> ListenEvents

    EventType -->|connection-lost| Reconnect[Attempt reconnection]
    Reconnect --> RetryConnection{Connection<br/>restored?}
    RetryConnection -->|Yes| WebSocket
    RetryConnection -->|No| ShowOffline[Show offline banner]
    ShowOffline --> Reconnect

    style Start fill:#e1f5ff
```

---

## 6. Review & Rating Flow

### Write Review

```mermaid
flowchart TD
    Start([Order History or<br/>Product Page]) --> Trigger{Review trigger}

    Trigger -->|From order| OrderPrompt[Click 'Write Review'<br/>on delivered order]
    Trigger -->|Reminder email| EmailLink[Click review link<br/>in email]

    OrderPrompt --> CheckEligible{Eligible to<br/>review?}
    EmailLink --> CheckEligible

    CheckEligible -->|Not purchased| NotEligible[Cannot review:<br/>not a verified purchase]
    NotEligible --> Cancel([Cancel])

    CheckEligible -->|Already reviewed| AlreadyReviewed[Already reviewed]
    AlreadyReviewed --> EditOption{Edit<br/>review?}
    EditOption -->|Yes| EditReview[Edit existing review]
    EditOption -->|No| Cancel

    CheckEligible -->|Yes| ReviewModal[Open review modal]
    ReviewModal --> ShowProduct[Display:<br/>- Product info<br/>- Order details]

    ShowProduct --> RatingStep[Select star rating<br/>☆☆☆☆☆]
    RatingStep --> ValidateRating{Rating<br/>selected?}
    ValidateRating -->|No| RatingRequired[Rating required]
    RatingRequired --> RatingStep

    ValidateRating -->|Yes| ReviewTitle[Enter review title]
    ReviewTitle --> ReviewText[Write review text]
    ReviewText --> PhotosOptional{Add photos?}

    PhotosOptional -->|Yes| UploadPhotos[Upload review photos<br/>Max 5 images]
    UploadPhotos --> ValidatePhotos{Valid<br/>photos?}
    ValidatePhotos -->|No| PhotoError[Photo errors]
    PhotoError --> UploadPhotos
    ValidatePhotos -->|Yes| DetailedRatings

    PhotosOptional -->|No| DetailedRatings

    DetailedRatings[Optional ratings:<br/>- Quality ☆☆☆☆☆<br/>- Value ☆☆☆☆☆<br/>- Shipping ☆☆☆☆☆]
    DetailedRatings --> Verification[☑ Verify this is based<br/>on my experience]

    Verification --> Preview[Preview review]
    Preview --> ReviewAction{Action?}

    ReviewAction -->|Edit| EditWhat{Edit what?}
    EditWhat -->|Rating| RatingStep
    EditWhat -->|Title| ReviewTitle
    EditWhat -->|Text| ReviewText
    EditWhat -->|Photos| PhotosOptional

    ReviewAction -->|Cancel| ConfirmCancel{Discard<br/>review?}
    ConfirmCancel -->|Yes| Cancel
    ConfirmCancel -->|No| Preview

    ReviewAction -->|Submit| ValidateReview{All required<br/>fields?}
    ValidateReview -->|No| ShowErrors[Show missing fields]
    ShowErrors --> EditWhat

    ValidateReview -->|Yes| SubmitReview[Submit review]
    SubmitReview --> Moderate[Review moderation<br/>Check for:<br/>- Spam<br/>- Profanity<br/>- Policy violations]

    Moderate --> ModResult{Approved?}
    ModResult -->|Flagged| ManualReview[Queue for manual review]
    ManualReview --> Pending[Status: Pending approval]
    Pending --> NotifyPending[Notify user: under review]
    NotifyPending --> End([Review submitted])

    ModResult -->|Auto-approved| PublishReview[Publish review]
    PublishReview --> UpdateProduct[Update product:<br/>- Average rating<br/>- Review count]
    UpdateProduct --> NotifySeller[Notify seller]
    NotifySeller --> Success[Review published! ✓]
    Success --> SharePrompt{Share review?}

    SharePrompt -->|Yes| ShareReview[Share on social media]
    ShareReview --> End
    SharePrompt -->|No| End

    EditReview --> ReviewText

    style Start fill:#e1f5ff
    style Cancel fill:#c8e6c9
    style End fill:#c8e6c9
    style NotEligible fill:#ffcdd2
    style RatingRequired fill:#ffcdd2
    style PhotoError fill:#ffcdd2
    style ShowErrors fill:#ffcdd2
```

### Seller Response to Review

```mermaid
flowchart TD
    Start([Seller Dashboard]) --> Notification[Receive review notification]
    Notification --> ViewReview[View review]

    ViewReview --> ReviewAction{Action?}

    ReviewAction -->|Ignore| End([Dashboard])

    ReviewAction -->|Respond| CheckResponse{Already<br/>responded?}
    CheckResponse -->|Yes| EditResponse[Edit response]
    CheckResponse -->|No| WriteResponse[Write response]

    WriteResponse --> ComposeResponse[Compose message:<br/>- Thank customer<br/>- Address concerns<br/>- Be professional]
    EditResponse --> ComposeResponse

    ComposeResponse --> PreviewResponse[Preview response]
    PreviewResponse --> ConfirmAction{Action?}

    ConfirmAction -->|Edit| ComposeResponse
    ConfirmAction -->|Cancel| End
    ConfirmAction -->|Post| PostResponse[Post response]

    PostResponse --> Published[Response published]
    Published --> NotifyReviewer[Notify reviewer]
    NotifyReviewer --> UpdateReview[Update review with response]
    UpdateReview --> Success[Response posted ✓]
    Success --> End

    ReviewAction -->|Report| ReportReview[Report review]
    ReportReview --> SelectReason[Select reason:<br/>- Spam<br/>- Fake review<br/>- Offensive<br/>- Wrong product<br/>- Other]
    SelectReason --> SubmitReport[Submit report]
    SubmitReport --> UnderInvestigation[Under investigation]
    UnderInvestigation --> End

    style Start fill:#e1f5ff
    style End fill:#c8e6c9
```

---

## 7. Order Management

### Track Order (Buyer)

```mermaid
flowchart TD
    Start([Dashboard or Email]) --> ViewOrders[View Orders]
    ViewOrders --> SelectOrder[Select order]

    SelectOrder --> OrderDetails[Order Details Page]
    OrderDetails --> ShowInfo[Display:<br/>- Order number<br/>- Items<br/>- Total<br/>- Status<br/>- Tracking]

    ShowInfo --> OrderStatus{Current status}

    OrderStatus -->|Pending| Pending[⏱ Pending<br/>Waiting for seller]
    OrderStatus -->|Processing| Processing[📦 Processing<br/>Seller preparing]
    OrderStatus -->|Shipped| Shipped[🚚 Shipped<br/>In transit]
    OrderStatus -->|Delivered| Delivered[✓ Delivered]
    OrderStatus -->|Cancelled| Cancelled[✕ Cancelled]

    Pending --> Actions
    Processing --> Actions

    Shipped --> TrackingAvail{Tracking<br/>available?}
    TrackingAvail -->|Yes| ViewTracking[View tracking info]
    ViewTracking --> TrackingMap[Show:<br/>- Current location<br/>- Delivery estimate<br/>- Tracking history]
    TrackingMap --> Actions
    TrackingAvail -->|No| EstimateOnly[Show delivery estimate]
    EstimateOnly --> Actions

    Delivered --> DeliveryConfirm[Delivery confirmed:<br/>Date & time]
    DeliveryConfirm --> ReviewPrompt{Written<br/>review?}
    ReviewPrompt -->|No| WriteReview[Prompt to write review]
    WriteReview --> Actions
    ReviewPrompt -->|Yes| Actions

    Cancelled --> CancelReason[Show cancellation:<br/>- Reason<br/>- Refund status]
    CancelReason --> RefundCheck{Refund<br/>processed?}
    RefundCheck -->|Yes| RefundInfo[Show refund details]
    RefundCheck -->|No| RefundPending[Refund pending]
    RefundInfo --> Actions
    RefundPending --> Actions

    Actions{Available actions}

    Actions -->|Message seller| ContactSeller[Open conversation]
    ContactSeller --> MessageFlow([Messaging])

    Actions -->|Request cancel| CancelRequest[Cancel order]
    CancelRequest --> CancelConfirm{Confirm<br/>cancel?}
    CancelConfirm -->|No| OrderDetails
    CancelConfirm -->|Yes| CheckCancelable{Can cancel?}
    CheckCancelable -->|No| CannotCancel[Cannot cancel:<br/>already shipped]
    CannotCancel --> OrderDetails
    CheckCancelable -->|Yes| ProcessCancel[Process cancellation]
    ProcessCancel --> NotifySeller[Notify seller]
    NotifySeller --> OrderCancelled[Order cancelled ✓]
    OrderCancelled --> OrderDetails

    Actions -->|Request return| ReturnFlow[Initiate return]
    ReturnFlow --> ReturnReason[Select reason]
    ReturnReason --> SubmitReturn[Submit return request]
    SubmitReturn --> ReturnPending[Return pending approval]
    ReturnPending --> OrderDetails

    Actions -->|Report issue| ReportIssue[Report problem:<br/>- Not received<br/>- Wrong item<br/>- Damaged<br/>- Not as described]
    ReportIssue --> DisputeFlow([Dispute Resolution])

    Actions -->|Download invoice| DownloadInvoice[Generate & download PDF]
    DownloadInvoice --> OrderDetails

    Actions -->|Buy again| BuyAgain[Add items to cart]
    BuyAgain --> Cart([Shopping Cart])

    style Start fill:#e1f5ff
    style MessageFlow fill:#c8e6c9
    style DisputeFlow fill:#c8e6c9
    style Cart fill:#c8e6c9
    style CannotCancel fill:#ffcdd2
```

### Fulfill Order (Seller)

```mermaid
flowchart TD
    Start([Seller Dashboard]) --> NewOrder[New order notification]
    NewOrder --> OrderList[View Orders]
    OrderList --> SelectOrder[Select order]

    SelectOrder --> OrderDetails[View order details]
    OrderDetails --> VerifyOrder[Verify:<br/>- Items<br/>- Quantity<br/>- Address<br/>- Payment]

    VerifyOrder --> OrderAction{Action?}

    OrderAction -->|Accept| AcceptOrder[Accept order]
    AcceptOrder --> UpdateStatus[Status: Processing]
    UpdateStatus --> PrepareItems[Prepare items for shipping]
    PrepareItems --> PackItems[Pack items]
    PackItems --> ReadyToShip[Ready to ship]

    ReadyToShip --> ShipMethod{Shipping method}

    ShipMethod -->|Carrier| PrintLabel[Print shipping label]
    PrintLabel --> EnterTracking[Enter tracking number]
    EnterTracking --> ValidateTracking{Valid<br/>tracking?}
    ValidateTracking -->|No| TrackingError[Invalid tracking format]
    TrackingError --> EnterTracking
    ValidateTracking -->|Yes| MarkShipped

    ShipMethod -->|Local delivery| ScheduleDelivery[Schedule local delivery]
    ScheduleDelivery --> MarkShipped

    MarkShipped[Mark as shipped]
    MarkShipped --> NotifyBuyer[Notify buyer:<br/>- Email<br/>- In-app notification]
    NotifyBuyer --> WaitDelivery[Wait for delivery]

    WaitDelivery --> DeliveryUpdate{Delivery update}

    DeliveryUpdate -->|Delivered| MarkDelivered[Mark as delivered]
    MarkDelivered --> ReleasePayment[Release payment to seller]
    ReleasePayment --> OrderComplete[Order complete ✓]
    OrderComplete --> End([Dashboard])

    DeliveryUpdate -->|Delayed| UpdateTracking[Update tracking info]
    UpdateTracking --> WaitDelivery

    DeliveryUpdate -->|Issue| ContactCarrier[Contact shipping carrier]
    ContactCarrier --> ResolveIssue[Resolve shipping issue]
    ResolveIssue --> WaitDelivery

    OrderAction -->|Decline| DeclineReason[Select reason:<br/>- Out of stock<br/>- Cannot ship<br/>- Pricing error<br/>- Other]
    DeclineReason --> ConfirmDecline{Confirm<br/>decline?}
    ConfirmDecline -->|No| OrderDetails
    ConfirmDecline -->|Yes| CancelOrder[Cancel order]
    CancelOrder --> ProcessRefund[Process refund]
    ProcessRefund --> NotifyBuyerCancel[Notify buyer]
    NotifyBuyerCancel --> End

    OrderAction -->|Delay| RequestDelay[Request shipping delay]
    RequestDelay --> SetNewDate[Set new ship date]
    SetNewDate --> NotifyDelay[Notify buyer of delay]
    NotifyDelay --> OrderDetails

    OrderAction -->|Message buyer| ContactBuyer[Send message]
    ContactBuyer --> MessageFlow([Messaging])

    style Start fill:#e1f5ff
    style End fill:#c8e6c9
    style MessageFlow fill:#c8e6c9
    style TrackingError fill:#ffcdd2
```

---

## 8. Dispute Resolution

### File Dispute (Buyer)

```mermaid
flowchart TD
    Start([Order Details]) --> Issues{Issue type}

    Issues -->|Not received| NotReceived[Item not received]
    Issues -->|Wrong item| WrongItem[Received wrong item]
    Issues -->|Damaged| Damaged[Item damaged]
    Issues -->|Not as described| NotAsDescribed[Not as described]
    Issues -->|Other| OtherIssue[Other issue]

    NotReceived --> FileDispute
    WrongItem --> FileDispute
    Damaged --> FileDispute
    NotAsDescribed --> FileDispute
    OtherIssue --> FileDispute

    FileDispute[Click 'Report Problem']
    FileDispute --> DisputeForm[Dispute form]

    DisputeForm --> SelectIssue[Select issue type]
    SelectIssue --> DescribeProblem[Describe problem]
    DescribeProblem --> UploadEvidence[Upload evidence:<br/>- Photos<br/>- Videos<br/>- Screenshots<br/>- Documents]

    UploadEvidence --> ValidateEvidence{Valid<br/>evidence?}
    ValidateEvidence -->|No| EvidenceError[Invalid files]
    EvidenceError --> UploadEvidence

    ValidateEvidence -->|Yes| RequestedResolution[Select desired resolution:<br/>- Full refund<br/>- Partial refund<br/>- Replacement<br/>- Return & refund]

    RequestedResolution --> ReviewDispute[Review dispute details]
    ReviewDispute --> SubmitConfirm{Submit<br/>dispute?}

    SubmitConfirm -->|No| Cancel([Cancel])
    SubmitConfirm -->|Yes| SubmitDispute[Submit dispute]

    SubmitDispute --> DisputeCreated[Dispute created<br/>Case #XXXX]
    DisputeCreated --> NotifySeller[Notify seller]
    NotifySeller --> SellerResponse[Wait for seller response]

    SellerResponse --> ResponseTime{Seller<br/>responds?}

    ResponseTime -->|Yes, within 48h| SellerOffer[Seller offers resolution]
    SellerOffer --> ReviewOffer[Review seller's offer]
    ReviewOffer --> AcceptOffer{Accept<br/>offer?}

    AcceptOffer -->|Yes| AcceptResolution[Accept resolution]
    AcceptResolution --> ProcessResolution[Process resolution:<br/>- Issue refund<br/>- Arrange return<br/>- Send replacement]
    ProcessResolution --> DisputeResolved[Dispute resolved ✓]
    DisputeResolved --> End([Case closed])

    AcceptOffer -->|No| Negotiate[Counter-offer or negotiate]
    Negotiate --> NegotiationRounds{Agreement<br/>reached?}
    NegotiationRounds -->|Yes| AcceptResolution
    NegotiationRounds -->|No| EscalateToAI

    ResponseTime -->|No, timeout| AutoEscalate[Auto-escalate after 48h]
    AutoEscalate --> EscalateToAI

    EscalateToAI[Escalate to AI analysis]
    EscalateToAI --> AIAnalysis[AI analyzes:<br/>- Evidence<br/>- Messages<br/>- Order history<br/>- User history]

    AIAnalysis --> AIDecision{AI confidence}

    AIDecision -->|High confidence| AIResolution[AI makes decision]
    AIResolution --> AutoResolve[Automatic resolution]
    AutoResolve --> NotifyBoth[Notify both parties]
    NotifyBoth --> AppealWindow[7-day appeal period]

    AppealWindow --> Appeal{Appeal<br/>filed?}
    Appeal -->|No| End
    Appeal -->|Yes| HumanReview

    AIDecision -->|Low confidence| HumanReview[Escalate to human mediator]

    HumanReview[Human mediator reviews case]
    HumanReview --> MediatorAnalysis[Mediator analyzes all evidence]
    MediatorAnalysis --> ContactParties[Contact both parties<br/>if needed]
    ContactParties --> MediatorDecision[Mediator makes decision]

    MediatorDecision --> FinalResolution[Final resolution:<br/>- Refund decision<br/>- Return required<br/>- No action]
    FinalResolution --> ExecuteResolution[Execute resolution]
    ExecuteResolution --> UpdateRecords[Update:<br/>- User records<br/>- Seller rating<br/>- Platform metrics]
    UpdateRecords --> End

    style Start fill:#e1f5ff
    style Cancel fill:#c8e6c9
    style End fill:#c8e6c9
    style EvidenceError fill:#ffcdd2
```

### Handle Dispute (Seller)

```mermaid
flowchart TD
    Start([Seller Dashboard]) --> DisputeNotif[Receive dispute notification]
    DisputeNotif --> ViewDispute[View dispute details]

    ViewDispute --> ReviewClaim[Review:<br/>- Buyer's claim<br/>- Evidence<br/>- Order details]

    ReviewClaim --> SellerAction{Action?}

    SellerAction -->|Accept| AcceptClaim[Accept buyer's claim]
    AcceptClaim --> OfferResolution[Offer resolution:<br/>- Full refund<br/>- Partial refund<br/>- Replacement<br/>- Return]
    OfferResolution --> SubmitOffer[Submit offer]
    SubmitOffer --> WaitBuyerResponse[Wait for buyer response]

    WaitBuyerResponse --> BuyerDecision{Buyer accepts?}
    BuyerDecision -->|Yes| ProcessResolution[Process resolution]
    ProcessResolution --> DisputeResolved[Dispute resolved ✓]
    DisputeResolved --> End([Dashboard])

    BuyerDecision -->|No| Negotiate[Negotiate alternative]
    Negotiate --> CounterOffer[Make counter-offer]
    CounterOffer --> WaitBuyerResponse

    SellerAction -->|Dispute| DisputeClaim[Dispute the claim]
    DisputeClaim --> ProvideEvidence[Provide counter-evidence:<br/>- Shipping proof<br/>- Photos<br/>- Messages<br/>- Tracking]
    ProvideEvidence --> ExplainPosition[Explain your position]
    ExplainPosition --> SubmitResponse[Submit response]
    SubmitResponse --> UnderReview[Under review]

    UnderReview --> ReviewProcess{Review by}

    ReviewProcess -->|AI| AIReview[AI analysis]
    AIReview --> AIResult{AI decision}
    AIResult -->|Favor seller| FavorSeller[Case decided in favor of seller]
    AIResult -->|Favor buyer| FavorBuyer[Case decided in favor of buyer]
    AIResult -->|Inconclusive| HumanMediator

    ReviewProcess -->|Human| HumanMediator[Human mediator assigned]
    HumanMediator --> MediatorContact[Mediator may contact you]
    MediatorContact --> ProvideMoreInfo{More info<br/>needed?}
    ProvideMoreInfo -->|Yes| SubmitAdditional[Submit additional evidence]
    SubmitAdditional --> MediatorContact
    ProvideMoreInfo -->|No| FinalDecision[Mediator makes decision]

    FinalDecision --> Decision{Decision}
    Decision -->|Favor seller| FavorSeller
    Decision -->|Favor buyer| FavorBuyer
    Decision -->|Split decision| PartialResolution[Partial resolution<br/>Compromise reached]

    FavorSeller --> NoAction[No action required]
    NoAction --> UpdateRating[Update metrics]
    UpdateRating --> End

    FavorBuyer --> ProcessRefund[Process refund/return]
    ProcessRefund --> ImpactRating[May impact seller rating]
    ImpactRating --> End

    PartialResolution --> SplitCosts[Split costs/refund]
    SplitCosts --> End

    SellerAction -->|No response| Timeout[Timeout after 48h]
    Timeout --> AutoFavorBuyer[Auto-decide for buyer]
    AutoFavorBuyer --> FavorBuyer

    style Start fill:#e1f5ff
    style End fill:#c8e6c9
```

---

## Additional Flows

### Password Reset

```mermaid
flowchart TD
    Start([Login Page]) --> ForgotPassword[Click 'Forgot Password']
    ForgotPassword --> EnterEmail[Enter email address]
    EnterEmail --> Submit[Click 'Send Reset Link']

    Submit --> ValidateEmail{Email<br/>exists?}
    ValidateEmail -->|No| ShowGenericMsg[Show generic message<br/>Security: don't reveal if email exists]
    ValidateEmail -->|Yes| SendEmail[Send password reset email]

    SendEmail --> ShowGenericMsg
    ShowGenericMsg --> EmailSent[Check your email for reset link]

    EmailSent --> WaitForClick[Wait for user to click link]
    WaitForClick --> ClickLink[User clicks reset link]
    ClickLink --> ValidateToken{Token<br/>valid?}

    ValidateToken -->|No| ExpiredToken[Token expired or invalid]
    ExpiredToken --> ResendOption{Request<br/>new link?}
    ResendOption -->|Yes| EnterEmail
    ResendOption -->|No| End([Login Page])

    ValidateToken -->|Yes| ResetForm[Password reset form]
    ResetForm --> NewPassword[Enter new password]
    NewPassword --> ConfirmPassword[Confirm new password]
    ConfirmPassword --> Validate{Passwords<br/>match?}

    Validate -->|No| PasswordMismatch[Passwords don't match]
    PasswordMismatch --> NewPassword

    Validate -->|Yes| CheckStrength{Strong<br/>password?}
    CheckStrength -->|No| WeakPassword[Password too weak]
    WeakPassword --> NewPassword

    CheckStrength -->|Yes| UpdatePassword[Update password in database]
    UpdatePassword --> InvalidateTokens[Invalidate all existing sessions]
    InvalidateTokens --> Success[Password reset successful ✓]
    Success --> RedirectLogin[Redirect to login]
    RedirectLogin --> End

    style Start fill:#e1f5ff
    style End fill:#c8e6c9
    style ExpiredToken fill:#ffcdd2
    style PasswordMismatch fill:#ffcdd2
    style WeakPassword fill:#ffcdd2
```

---

These user flow diagrams provide comprehensive visualization of all major user journeys in the Quantum Marketplace Exchange platform. They can be rendered in any Markdown viewer that supports Mermaid, including GitHub, GitLab, Notion, and many documentation tools.
