export  { default } from 'next-auth/middleware'

export const config = {
    
    matcher: [
        '/api/:path*',
        '/nota',
        '/proyectos',
        '/materiasPrimas',
        '/salidasMateriasPrimas',
        '/clientes',
        '/ventas',
        '/pedidos',
        '/planilla',
        '/',
    ]
}