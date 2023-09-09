export const BalanceSummary = () => {
    return (
        <div className="border-t p-2 w-full flex items-center">
            <div className="grow">
                <div className="text-sm text-gray-500">Total Balance</div>
                <div className="text-xl text-gray-800">512,43</div>
                <div className="text-[10px] mt-2 hover:underline">
                    Payment provided by V3X Labs
                </div>
            </div>
            <div>
                <button className="border p-4 rounded-md hover:bg-neutral-50/50 active:bg-lime-50 active:border-lime-700/30 active:translate-y-0.5 hover:shadow active:shadow-sm transition-all">
                    Proceed
                </button>
            </div>
        </div>
    );
};
