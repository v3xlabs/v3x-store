'use client';

import { FiChevronDown } from 'react-icons/fi';

import { useAccount } from '../../hooks/useAccount';

export const AccountSection = () => {
    const { account, ensName } = useAccount();

    return (
        <button className="border text-start rounded-lg w-full p-2 col-end-13 col-span-4 flex items-center gap-2 hover:bg-slate-50 transition-all">
            <div className="h-ful flex items-center">
                <div className="aspect-square h-8 bg-gray-100 rounded-full overflow-hidden">
                    <img
                        src={
                            'https://metadata.ens.domains/mainnet/avatar/' +
                            ensName
                        }
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="text-sm leading-none font-bold">{ensName}</div>
                <div className="text-xs leading-none">
                    {account.slice(0, 6)}...{account.slice(-4)}
                </div>
            </div>
            <div className="grow"></div>
            <div className="">
                <FiChevronDown />
            </div>
        </button>
    );
};
