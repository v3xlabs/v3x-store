import { FC } from 'react';

export const Sidebar: FC = () => {
    return (
        <header className="lg:absolute lg:left-0 w-auto p-8 flex flex-col gap-4 max-w-xs">
            <div className="flex flex-col justify-center whitespace-nowrap">
                <div className="bg-notblack w-fit font-bold">
                    <span className="text-white -1 mx-3">v3xlabs</span>
                </div>
                <div>Empowering open-source</div>
            </div>
            <nav className="flex">
                <ul className="">
                    {[
                        ['.company', 'https://v3x.company'],
                        ['.contact', 'https://v3x.contact'],
                        ['.domains', 'https://v3x.domains'],
                        ['.health', 'https://v3x.health'],
                        ['.store', 'https://v3x.store'],
                        ['.team', 'https://v3x.team'],
                        ['.chat', 'https://v3x.chat'],
                        ['.wiki', 'https://v3x.wiki'],
                    ].map(([label, href]) => (
                        <li key={label}>
                            <a
                                href={href}
                                className={[
                                    'hover:text-blue-500 hover:underline',
                                    label == '.page'
                                        ? 'text-blue-500'
                                        : 'text-notblack',
                                ].join(' ')}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
