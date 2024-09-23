import React from "react";

interface NotificationProps {
  name: string;
  quantity: number;
  location: string;
}

const NotificationBanner: React.FC<NotificationProps> = ({
  name,
  quantity,
  location,
}) => {
  return (
    <div className="bg-gray-100 flex justify-around items-center py-2">
      <p className="text-green-600 font-bold">
        {name} Just Bought {quantity} Coupons ({location})
      </p>
      <span className="text-yellow-500 text-2xl">⭐</span>
      <p className="text-green-600 font-bold">
        {name.split(" ").join("")} Just Bought {quantity} Coupons ({location})
      </p>
    </div>
  );
};

export default NotificationBanner;
