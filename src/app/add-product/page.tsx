export default function AddProductPage() {
    return (
        <div>
            <h1 className="mb-3 text-lg font-bold">Add Product</h1>
            <form>
                <input
                    required
                    name="name"
                    placeholder="Name"
                    className="input-bordered input mb-3 w-full" />
            </form>
        </div>
    )
}