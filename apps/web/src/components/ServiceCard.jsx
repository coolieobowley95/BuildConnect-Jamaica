export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href = "/request",
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-[#0f4c81] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-[#0f4c81]" />
        </div>
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        )}
        <a
          href={href}
          className="mt-auto bg-[#f97316] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#ea580c] transition-colors text-sm"
        >
          Request Service
        </a>
      </div>
    </div>
  );
}
