type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="text-center">
      <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}