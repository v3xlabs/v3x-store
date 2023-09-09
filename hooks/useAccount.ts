type useAccountData = {
    account?: string;
    ensName?: string;
};

export const useAccount = (): useAccountData => {
    return {
        account: '0x225f137127d9067788314bc7fcc1f36746a3c3B5',
        ensName: 'luc.eth',
    };
    // return {};
};
