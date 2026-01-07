import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { themes } from '../data/themes';
import { RefreshCw, MapPin } from 'lucide-react';

export default function Generator() {
    const [currentTheme, setCurrentTheme] = useState(null);
    const [url, setUrl] = useState('');

    const generateRandomTheme = () => {
        const randomIndex = Math.floor(Math.random() * themes.length);
        const theme = themes[randomIndex];
        setCurrentTheme(theme);

        // Construct URL based on current location
        const baseUrl = window.location.origin;
        setUrl(`${baseUrl}/alert/${theme.id}`);
    };

    useEffect(() => {
        generateRandomTheme();
    }, []);

    return (
        <div className="flex flex-col items-center gap-8 min-h-screen justify-center p-4">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-cyan-400 mb-2">CyberSec Kids</h1>
                <p className="text-gray-400">Painel do Professor</p>
            </header>

            {currentTheme && (
                <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 max-w-md w-full flex flex-col items-center">

                    <div className="bg-white p-4 rounded-xl mb-6 shadow-inner">
                        <QRCode value={url} size={250} />
                    </div>

                    <div className="text-center mb-6">
                        <p className="text-sm text-gray-500 mb-1">Tema Atual:</p>
                        <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                            <currentTheme.icon size={24} color={currentTheme.color} />
                            {currentTheme.title}
                        </h2>
                    </div>

                    <div className="w-full bg-gray-900 p-3 rounded-lg flex items-center gap-2 mb-6 text-xs text-gray-400 font-mono break-all border border-gray-800">
                        <MapPin size={14} />
                        {url}
                    </div>

                    <button
                        onClick={generateRandomTheme}
                        className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg active:scale-95"
                    >
                        <RefreshCw size={20} />
                        Gerar Novo Desafio
                    </button>
                </div>
            )}

            {window.location.hostname === 'localhost' && (
                <div className="mt-8 p-4 bg-yellow-900/30 border border-yellow-700/50 rounded-lg text-yellow-200 text-sm max-w-lg text-left">
                    <strong>⚠️ Atenção:</strong> Estás em <code>localhost</code>.
                    Para os telemóveis dos alunos conseguirem abrir o QR Code, deves correr o servidor com <code>npm run dev -- --host</code> e aceder pelo IP da rede (ex: 192.168.x.x).
                </div>
            )}
        </div>
    );
}
