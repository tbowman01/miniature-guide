import Head from 'next/head';
import { GetServerSideProps } from 'next';

export default function Home() {
  return (
    <>
      <Head>
        <title>Quantum Marketplace Exchange</title>
        <meta name="description" content="Buy, sell, and trade with confidence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Welcome to Quantum Marketplace Exchange
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            The next-generation marketplace platform
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Low Fees</h2>
              <p className="text-gray-600">
                Pay only 2-3% transaction fees, significantly lower than traditional platforms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Secure Escrow</h2>
              <p className="text-gray-600">
                Blockchain-based escrow system ensures safe transactions for both buyers and sellers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">AI Recommendations</h2>
              <p className="text-gray-600">
                Discover products you'll love with our machine learning-powered recommendations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
