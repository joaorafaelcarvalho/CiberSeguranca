import {
    UserX,
    ShieldAlert,
    FileWarning,
    Fish,
    MousePointerClick,
    DownloadCloud,
    Ghost,
    Unlock,
    CreditCard,
    GlobeLock,
    Wifi
} from 'lucide-react';

export const themes = [
    {
        id: 'tailgating',
        title: 'Tailgating (O Pendura)',
        message: 'Nunca deixes estranhos entrar atrás de ti!',
        detailedText: 'O "Tailgating" acontece quando alguém aproveita a tua passagem (por exemplo, numa porta que precisa de cartão) para entrar sem permissão. Nunca deixes ninguém entrar à "boleia" da tua identificação, mesmo que pareça simpático! A segurança do espaço começa em ti.',
        videoFile: 'tailgating.mp4',
        color: '#E63946', // Red
        icon: UserX
    },
    {
        id: 'identity-theft',
        title: 'Roubo Identidade (O Impostor)',
        message: 'Protege os teus dados pessoais.',
        detailedText: 'O Roubo de Identidade é quando alguém finge ser tu para fazer coisas más. Nunca partilhes o teu Cartão de Cidadão, passwords ou morada com estranhos na internet. Os teus dados são o teu super-poder, não os dês a ninguém!',
        videoFile: 'identity.mp4',
        color: '#F4A261', // Orange
        icon: ShieldAlert
    },
    {
        id: 'fake-news',
        title: 'Fake News (Mentiras na Net)',
        message: 'Verifica sempre a fonte!',
        detailedText: 'Nem tudo o que vês na internet é verdade! Muitas notícias são inventadas para te assustar ou enganar. Antes de partilhares, confirma se a fonte é de confiança. Se parece demasiado estranho ou demasiado bom, provavelmente é mentira.',
        videoFile: 'fakenews.mp4',
        color: '#2A9D8F', // Teal
        icon: FileWarning
    },
    {
        id: 'phishing',
        title: 'Phishing (Isco Digital)',
        message: 'Não mordas o isco!',
        detailedText: 'Phishing é quando os hackers enviam emails ou mensagens a fingir que são de uma empresa (como um banco ou um jogo) para roubar os teus dados. Nunca cliques em links que dizem que ganhaste prémios ou que precisas de mudar a password urgentemente.',
        videoFile: 'phishing.mp4',
        color: '#457B9D', // Blue
        icon: Fish
    },
    {
        id: 'dangerous-links',
        title: 'Links Perigosos (O Botão Proibido)',
        message: 'Se não sabes, não cliques!',
        detailedText: 'Clicar num link desconhecido pode ser perigoso! Pode instalar vírus ou levar-te para sites falsos. Se receberes um link estranho de um amigo, pergunta-lhe primeiro se foi ele que enviou. Na dúvida, o melhor é não clicar.',
        videoFile: 'links.mp4',
        color: '#1D3557', // Dark Blue
        icon: MousePointerClick
    },
    {
        id: 'malware',
        title: 'Downloads/Vírus (Ficheiro Envenenado)',
        message: 'Cuidado com o que baixas!',
        detailedText: 'Muitos jogos e apps "grátis" em sites piratas trazem "brindes" escondidos: vírus! Estes vírus podem estragar o teu computador ou roubar informações. Faz downloads apenas das lojas oficiais e sites seguros.',
        videoFile: 'malware.mp4',
        color: '#606C38', // Dark Green
        icon: DownloadCloud
    },
    {
        id: 'remote-control',
        title: 'Controlo Remoto (O Fantasma do PC)',
        message: 'Atenção a movimentos estranhos!',
        detailedText: 'Já viste o rato a mexer-se sozinho? Isso pode ser um hacker a controlar o teu computador à distância! Se isso acontecer, desliga a internet imediatamente e pede ajuda a um adulto. Mantém o teu antivírus sempre atualizado.',
        videoFile: 'remote.mp4',
        color: '#BC6C25', // Brown
        icon: Ghost
    },
    {
        id: 'info-theft',
        title: 'Roubo de Informação (Cofre Aberto)',
        message: 'Bloqueia sempre o teu ecrã!',
        detailedText: 'Deixar o computador ou telemóvel desbloqueado quando sais de ao pé dele é como deixar a porta de casa aberta. Bloqueia sempre o ecrã (Win + L no PC) para que ninguém possa mexer nas tuas coisas quando não estás a ver.',
        videoFile: 'infotheft.mp4',
        color: '#9D0208', // Dark Red
        icon: Unlock
    },
    {
        id: 'card-cloning',
        title: 'Clone Cartão (Cartão Mágico)',
        message: 'Não deixes o cartão sozinho!',
        detailedText: 'Os cartões bancários têm tecnologia que permite pagamentos rápidos, mas também podem ser copiados por aparelhos escondidos (skimmers). Nunca percas o teu cartão de vista quando fazes pagamentos.',
        videoFile: 'cloning.mp4',
        color: '#8338EC', // Purple
        icon: CreditCard
    },
    {
        id: 'deepweb',
        title: 'Deepweb (O Lado Escuro)',
        message: 'Fica na parte segura da net.',
        detailedText: 'A Deepweb é uma parte da internet que não aparece no Google e onde acontecem muitas coisas perigosas e ilegais. Não tentes aceder a sites "cebola" (.onion) ou instalar o Tor sem supervisão. Fica pela superfície segura da web!',
        videoFile: 'deepweb.mp4',
        color: '#000000', // Black
        icon: GlobeLock
    },
    {
        id: 'network-intrusion',
        title: 'Intrusão de Rede (O Espião Wi-Fi)',
        message: 'Cuidado onde te ligas!',
        detailedText: 'A intrusão de rede acontece quando alguém entra na tua ligação Wi-Fi sem permissão para espiar o que fazes. Evita redes Wi-Fi públicas sem password e muda a senha da tua internet de casa regularmente para manter os "penduras" digitais longe!',
        videoFile: 'network.mp4',
        color: '#F72585', // Pink
        icon: Wifi
    }
];
