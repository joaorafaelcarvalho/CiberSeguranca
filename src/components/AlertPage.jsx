import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { themes } from '../data/themes';
import { AlertTriangle } from 'lucide-react';

export default function AlertPage() {
    const { themeId } = useParams();
    const navigate = useNavigate();
    const theme = themes.find(t => t.id === themeId);
    const [videoError, setVideoError] = useState(false);

    // Redirect or show error if theme not found
    if (!theme) {
        return (
            <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6 text-center text-white">
                <AlertTriangle size={64} className="text-red-500 mb-4" />
                <h1 className="text-2xl font-bold mb-2">Código Inválido</h1>
                <p className="mb-8 text-gray-400">Este QR Code não corresponde a nenhum desafio conhecido.</p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-gray-700 px-6 py-2 rounded-lg"
                >
                    Voltar
                </button>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-start py-8 px-4 text-center relative overflow-y-auto"
            style={{ backgroundColor: theme.color }}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-black opacity-20 pointer-events-none fixed" />

            {/* Top Header Section */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="z-10 w-full mb-4"
            >
                <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-md uppercase tracking-wide">
                    {theme.title}
                </h1>
                <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mt-1">
                    Alerta de Segurança
                </p>
            </motion.div>

            {/* Animated Character Icon ("Boneco") - Smaller for mobile */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 mb-6"
            >
                <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white p-3 rounded-full shadow-xl border-4 border-white/20 backdrop-blur-sm relative"
                >
                    {/* Eyes */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 flex gap-2 z-20 w-full justify-center -mt-4">
                        <motion.div
                            className="w-4 h-4 bg-white rounded-full border-2 border-black flex items-center justify-center"
                            initial={{ scaleY: 0.1 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="w-1 h-1 bg-black rounded-full" />
                        </motion.div>
                        <motion.div
                            className="w-4 h-4 bg-white rounded-full border-2 border-black flex items-center justify-center"
                            initial={{ scaleY: 0.1 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="w-1 h-1 bg-black rounded-full" />
                        </motion.div>
                    </div>
                    <theme.icon size={48} style={{ color: theme.color }} className="mt-1" />
                </motion.div>
            </motion.div>

            {/* Main Content Area */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="z-10 w-full max-w-xs flex flex-col items-center gap-6 mb-12"
            >

                {/* Video Player - Applied Styles Directly to Video to ensure perfect fit */}
                <div className="flex justify-center w-full">
                    {!videoError ? (
                        <video
                            controls
                            autoPlay
                            playsInline
                            // Styling applied directly to video:
                            // - w-full: matches the width of the container (and the Info Card below)
                            // - max-h-[40vh]: restrictive height constraint
                            // - rounded-xl: rounded corners on the video itself
                            className="w-full max-h-[40vh] h-auto object-contain rounded-xl shadow-2xl border-4 border-white/20 bg-black/20"
                            onError={() => setVideoError(true)}
                            src={`/videos/${theme.videoFile}`}
                        >
                            Browser sem suporte.
                        </video>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-40 w-56 text-white/50 p-4 border-4 border-white/20 rounded-xl bg-black/20">
                            <span className="text-xs text-center">Vídeo indisponível<br />({theme.videoFile})</span>
                        </div>
                    )}
                </div>

                {/* Info Card - Compact */}
                <div className="bg-black/40 backdrop-blur-md p-5 rounded-xl border border-white/20 text-left shadow-lg w-full">
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <AlertTriangle className="text-yellow-400" size={18} />
                        Atenção:
                    </h3>
                    <p className="text-base font-light text-white leading-relaxed">
                        {theme.detailedText || theme.message}
                    </p>
                </div>
            </motion.div>

            <div className="fixed bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent text-white text-[10px] z-20 uppercase tracking-widest opacity-50 pointer-events-none">
                CyberSec Kids
            </div>
        </div>
    );
}
