'use client';

import clsx from 'clsx';
import { useState } from 'react';

const shipping_options: [number, string, string, string, string][] = [
    [12, 'DHL Parcel', '2.50', 'in 3 days', '🚚🌬️'],
    [13, 'DHL Express', '5.00', 'in 1 day', '🚚🌬️🌬️'],
    [14, 'UPS', '3.00', 'in 2 days', '🚛🌬️'],
    [15, 'Manual', '0.00', 'on pickup', '🙋‍♀️📦'],
];

export const ShippingSection = () => {
    const [selectedShippingOffer, setSelectedShippingOffer] = useState(
        shipping_options.at(0)[0]
    );
    const [
        selectedOfferId,
        selectedName,
        selectedPrice,
        selectedETA,
        selectedSpeedEmoji,
    ] = shipping_options.find(([id]) => id === selectedShippingOffer);

    return (
        <div className="w-full border col-span-4 rounded-md col-end-13">
            <div className="text-xs w-full font-bold flex gap-2 items-center py-2 px-2.5">
                <div className="grow text-start">Delivery Strategy</div>
                <div className="-scale-x-100">{selectedSpeedEmoji}</div>
            </div>
            <div className="grid grid-cols-1">
                {shipping_options.map(([id, name, price, eta]) => (
                    <button
                        onClick={() => setSelectedShippingOffer(id)}
                        className={clsx(
                            'flex text-start items-center justify-between px-3 py-1 text-xs border-t',
                            selectedShippingOffer === id ? 'bg-slate-50' : ''
                        )}
                        key={name}
                    >
                        <div>
                            <div className="text-xs text-gray-500">{name}</div>
                            <div className="text-xs text-gray-800">
                                {price}
                                <img
                                    src="/tokens/sporebuck.svg"
                                    alt=""
                                    className="h-2 mx-0.5 inline-block"
                                />
                            </div>
                        </div>
                        <div className="text-xs text-gray-500">{eta}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};
