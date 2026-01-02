import { Trash2 } from "lucide-react";

export default function CartItem({
  item,
  increaseQty,
  decreaseQty,
  removeItem,
}) {
  return (
    <div className="flex items-center justify-between border-b py-6">
      <div className="flex gap-4">
        <img src={item.image} className="w-20 h-24 object-cover rounded" />

        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">Size: {item.size}</p>
          <p className="text-sm text-gray-500">Color: {item.color}</p>

          <div className="mt-1">
            <span className="font-bold">₹{item.price}</span>
            {item.originalPrice && (
              <>
                <span className="line-through text-sm text-gray-400 ml-2">
                  ₹{item.originalPrice}
                </span>
                <span className="text-xs text-red-500 ml-2">20%</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center bg-gray-100 rounded-full px-3">
          <button onClick={() => decreaseQty(item.id)}>−</button>
          <span className="mx-3">{item.qty}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>

        <Trash2
          className="text-red-500 cursor-pointer"
          onClick={() => removeItem(item.id)}
        />
      </div>
    </div>
  );
}
