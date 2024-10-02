interface ErrorProps {
  error: string;
}

function Error({ error }: ErrorProps) {
  return <p className="text-center text-red-600 text-2xl">{error}</p>;
}

export default Error;
