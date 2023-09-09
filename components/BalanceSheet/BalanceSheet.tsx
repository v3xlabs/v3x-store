'use client';

import { useAccount } from '../../hooks/useAccount';
import { BalanceSummary } from './BalanceSummary';
import { YourAssets } from './YourAssets';

export const BalanceSheet = () => {
    const { account } = useAccount();

    return (
        <div className="flex flex-col w-full bg-white border col-span-4 h-[512px] rounded-md col-end-13">
            <YourAssets />
            <div className="grow p-2 overflow-y-auto">
                {Array.from({ length: 20 }).map((_, index) => (
                    <div key={index} className="w-full h-8 bg-gray-100 mb-1" />
                ))}
            </div>
            <BalanceSummary />
        </div>
    );
};
