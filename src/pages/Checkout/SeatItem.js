import React from "react";

export default function SeatItem({ type, bookSeat, seatInfo }) {
    let seatStyle = " py-4 rounded-lg flex items-center justify-center ";
    const reservedStyle = " bg-white text-gray-900 cursor-not-allowed";
    const bookingStyle = " bg-yellow-400 text-gray-900 cursor-pointer";
    const availableStyle = " bg-zinc-700 text-slate-200 cursor-pointer";

    if (type == "booking") {
        seatStyle += bookingStyle;
    } else if (type == "reserved") {
        seatStyle += reservedStyle;
    } else {
        seatStyle += availableStyle;
    }
    return (
        <div
            className={seatStyle}
            key={seatInfo?.maGhe}
            onClick={() => bookSeat(seatInfo?.tenGhe)}
        >
            <span>{type == "reserved" ? "x" : seatInfo?.tenGhe}</span>
        </div>
    );
}
