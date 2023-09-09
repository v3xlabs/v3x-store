'use client';

import { clsx } from 'clsx';
import { useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import useSWR from 'swr';

import { useAccount } from '../../hooks/useAccount';

const coins = [
    [
        '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        'USDC',
        '250.0',
        'https://etherscan.io/token/images/centre-usdc_28.png',
    ],
    [
        '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        'DAI',
        '123.45',
        '/tokens/dai.png',
    ],
    [
        '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        'WBTC',
        '0.01',
        'https://s2.coinmarketcap.com/static/img/coins/200x200/3717.png',
    ],
];

const getBalances = async (address: string) => {
    console.log('Getting balances for ' + address);

    return coins;
};

export const YourAssets = () => {
    const [expanded, setExpanded] = useState(false);
    const { account } = useAccount();
    const { data } = useSWR(['', account], ([_, x]) => getBalances(x), {
        refreshInterval: 15 * 60,
    });

    return (
        <div className="border-b w-full">
            <button
                className="w-full flex hover:bg-slate-50"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
            >
                <div className="text-xs w-full font-bold flex gap-2 items-center py-2 px-2.5">
                    <div className="grow text-start">Your Assets</div>
                    <div className="bg-green-50 flex items-center gap-1 py-0.5 px-1.5 border border-lime-700/30 rounded-xl">
                        <img
                            src="/tokens/sporebuck.svg"
                            className="h-2.5"
                            alt=""
                        />
                        <span className="text-lime-800">512,43</span>
                    </div>
                </div>
            </button>
            <div
                className={clsx(
                    'w-full flex justify-evenly flex-wrap',
                    expanded ? '' : 'hidden'
                )}
            >
                {/* A table with every coin in data? using map */}

                <div className="w-full px-2 my-0.5">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="hidden">Token</th>
                                <th className="hidden">Balance</th>
                                <th className="hidden">Converted</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(
                                ([address, symbol, balance, image_url]) => (
                                    <tr key={address} className="text-xs">
                                        <td>
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={image_url}
                                                    alt=""
                                                    className="w-4 h-4"
                                                />
                                                <div className="text-sm h-fit leading-none">
                                                    {symbol}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            {balance}
                                        </td>
                                        <td className="text-right text-lime-800">
                                            <img
                                                src="/tokens/sporebuck.svg"
                                                className="h-2.5 inline-block mr-0.5"
                                                alt=""
                                            />
                                            {balance}
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
                <button
                    className="block text-xs py-0.5 hover:bg-neutral-50 w-full"
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                >
                    <FiChevronUp className="mx-auto" />
                </button>
            </div>
        </div>
    );
};
