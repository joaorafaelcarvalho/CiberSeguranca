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
            className="min-h-screen flex flex-col items-center justify-start p-6 text-center relative overflow-y-auto"
            style={{ backgroundColor: theme.color }}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-black opacity-20 pointer-events-none fixed" />

            {/* Animated Character Icon ("Boneco") */}
            <motion.div
                initial={{ scale: 0, y: -100 }}
                animate={{ scale: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
                className="relative z-10 mt-8 mb-6"
            >
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="bg-white p-6 rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm relative"
                >
                    {/* Eyes to make it a character */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 flex gap-4 z-20 w-full justify-center -mt-6">
                        <motion.div
                            className="w-8 h-8 bg-white rounded-full border-4 border-black flex items-center justify-center"
                            initial={{ scaleY: 0.1 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="w-2 h-2 bg-black rounded-full" />
                        </motion.div>
                        <motion.div
                            className="w-8 h-8 bg-white rounded-full border-4 border-black flex items-center justify-center"
                            initial={{ scaleY: 0.1 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="w-2 h-2 bg-black rounded-full" />
                        </motion.div>
                    </div>

                    <theme.icon size={80} style={{ color: theme.color }} className="mt-2" />
                </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="z-10 max-w-lg w-full mb-20"
            >
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-md uppercase tracking-wide">
                    {theme.title}
                </h1>

                <p className="text-white/90 font-medium text-lg mb-8 uppercase tracking-widest opacity-80">
                    Alerta de Segurança
                </p>

                {/* Video Player Container */}
                {/* Changed from fixed aspect-ratio to auto height with constraints */}
                <div className="w-full bg-black/20 rounded-xl overflow-hidden shadow-2xl mb-8 border border-white/10 relative group flex justify-center">
                    {!videoError ? (
                        <video
                            controls
                            autoPlay
                            playsInline
                            className="w-full max-h-[60vh] object-contain"
                            onError={() => setVideoError(true)}
                            src={`/videos/${theme.videoFile}`}
                        >
                            O teu browser não suporta vídeo.
                        </video>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-48 w-full text-white/50 p-4 bg-black/40">
                            <span className="text-sm">Vídeo indisponível ({theme.videoFile})</span>
                        </div>
                    )}
                </div>

                {/* Info Card */}
                <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-left shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <AlertTriangle className="text-yellow-400" size={20} />
                        O que deves saber:
                    </h3>
                    <p className="text-lg md:text-xl font-light text-white leading-relaxed">
                        {theme.detailedText || theme.message}
                    </p>
                </div>
            </motion.div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs z-20 uppercase tracking-widest opacity-60 pointer-events-none">
                CyberSec Kids
            </div>
        </div>
    );
}
