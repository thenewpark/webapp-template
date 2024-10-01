interface CardProps {
  title: string;
  body: string;
}

const Card = ({ title, body }: CardProps) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">{body}</p>
      </div>
    </div>
  );
};

export default Card;
