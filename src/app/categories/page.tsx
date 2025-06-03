import { Category } from "@/types/category";

async function getCategories(): Promise<Category[]> {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📂 Categories</h1>
        <a
          href="/categories/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          + Add New Category
        </a>
      </div>

      {categories.length === 0 ? (
        <p className="text-gray-500 italic">No categories found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-blue-100 text-left">
              <tr>
                <th className="px-4 py-3 border-b border-gray-200">ID</th>
                <th className="px-4 py-3 border-b border-gray-200">Name</th>
                <th className="px-4 py-3 border-b border-gray-200">Description</th>
                <th className="px-4 py-3 border-b border-gray-200">Created At</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr
                  key={cat.id}
                  className="hover:bg-blue-50 transition duration-150"
                >
                  <td className="px-4 py-3 border-b border-gray-100">{cat.id}</td>
                  <td className="px-4 py-3 border-b border-gray-100 font-medium text-gray-800">
                    {cat.name}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-100 text-gray-600">
                    {cat.description || <span className="italic text-gray-400">N/A</span>}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-100 text-gray-500">
                    {new Date(cat.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
