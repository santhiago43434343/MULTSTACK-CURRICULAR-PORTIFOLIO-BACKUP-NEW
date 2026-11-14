"""Dados iniciais que populam o banco na primeira execução.

Depois você troca isso por um cadastro (admin/CRUD) — os dados já estão no banco.
"""

"""Dados iniciais que populam o banco na primeira execução.

Depois você troca isso por um cadastro (admin/CRUD) — os dados já estão no banco.
"""

BANNERS = [
    {
        "ordem": 1,
        "titulo": "Back-end & APIs",
        "imagens": [
            "imagens/banners/backend/springboot.png",
            "imagens/banners/backend/rails.png",
            "imagens/banners/backend/ruby.jpg",
            "imagens/banners/backend/java.png",
            "imagens/banners/backend/nodejs.webp",
            "imagens/banners/backend/tomcat.jpg",
            "imagens/banners/backend/ci-cd-pipeline.png",
        ],
        "links": [
            {"label": "API TripBus (Rails)", "url": "#"},
            {"label": "Proway Computers", "url": "#"},
        ],
    },
    {
        "ordem": 2,
        "titulo": "Front-end & Estilo",
        "imagens": [
            "imagens/banners/frontend/angular.webp",
            "imagens/banners/frontend/typescript.jpg",
            "imagens/banners/frontend/tailwind.jpg",
            "imagens/banners/frontend/node-vs-angular.png",
        ],
        "links": [{"label": "Portfólio (este site)", "url": "#"}],
    },
    {
        "ordem": 3,
        "titulo": "Bancos de Dados",
        "imagens": [
            "imagens/banners/database/postgresql.webp",
            "imagens/banners/database/mariadb.png",
            "imagens/banners/database/cassandra.jpg",
            "imagens/banners/database/kubernetes.webp",
            "imagens/banners/database/alembic.png",
        ],
        "links": [{"label": "Projeto com PostgreSQL", "url": "#"}],
    },
    {
        "ordem": 4,
        "titulo": "DevOps & Ferramentas",
        "imagens": [
            "imagens/banners/devops/docker.webp",
            "imagens/banners/devops/github.jpg",
            "imagens/banners/devops/npm.png",
            "imagens/banners/devops/postman.png",
            "imagens/banners/devops/python.webp",
            "imagens/banners/devops/git.webp",
            "imagens/banners/devops/devops.webp",
        ],
        "links": [{"label": "TripBus (Docker)", "url": "#"}],
    },
    {
        "ordem": 5,
        "titulo": "Editores & IDEs",
        "imagens": [
            "imagens/banners/editores/vscode.png",
            "imagens/banners/editores/sublime.jpg",
            "imagens/banners/editores/netbeans.jpg",
            "imagens/banners/editores/visualg.jpg",
            "imagens/banners/editores/argocd.webp",
            "imagens/banners/editores/ci-cd-pipeline.png",
        ],
        "links": [{"label": "Em breve", "url": "#"}],
    },
    {
        "ordem": 6,
        "titulo": "Sistemas & Terminal",
        "imagens": [
            "imagens/banners/sistemas/windows.png",
            "imagens/banners/sistemas/linux-wsl.webp",
            "imagens/banners/sistemas/powershell.png",
            "imagens/banners/sistemas/ubuntu.jpeg",
        ],
        "links": [{"label": "Em breve", "url": "#"}],
    },
    {
        "ordem": 7,
        "titulo": "Do Início ao Intermediário #capgemini",
        "imagens": [
            "imagens/banners/capgemini/java.jpeg",
            "imagens/banners/capgemini/netbeans-001.png",
            "imagens/banners/capgemini/npm.png",
            "imagens/banners/capgemini/sass.png",
            "imagens/banners/capgemini/insomnia.png",
        ],
        "links": [{"label": "Em breve", "url": "#"}],
    },
    {
        "ordem": 8,
        "titulo": "IA Future ",
        "imagens": [
            "imagens/banners/ia-future/claude.jpg",
            "imagens/banners/ia-future/ia-future.png",
        ],
        "links": [{"label": "Em breve", "url": "#"}],
     
        "ordem": 9,
        "titulo": "Certificados & Competências",
        "imagens": [
         "imagens/banners/certificates/modelo-de-certificado.avif",   # capa
         "imagens/banners/certificates/certificate-example.jpg",      # capa
         "imagens/banners/certificates/certificate-graduacao.avif",
         "imagens/banners/certificates/azure-certificado.webp",
         "imagens/banners/certificates/certificate-amazon.jpg",

        ],
        "links": [
            {"label": "Bootcamp Santander", "url": "#"},
            {"label": "DIO Bootcamp", "url": "#"},
            {"label": "Unimes", "url": "#"},
            {"label": "IFRO", "url": "#"},
            {"label": "Bradesco Superior", "url": "#"},
        ],
    },
]

PROJETOS = [
    {
        "titulo": "TripBus",
        "descricao": "Sistema de reserva de passagens de ônibus com pagamento integrado via Mercado Pago.",
        "midia": "",
        "tecnologias": ["Ruby on Rails", "PostgreSQL", "Docker", "Angular"],
        "link_demo": "#",
        "link_repo": "#",
    },
    {
        "titulo": "Proway Computers",
        "descricao": "E-commerce de informática com assistente de IA que ajuda o cliente a escolher produtos.",
        "midia": "",
        "tecnologias": ["Rails", "Angular", "Docker", "IA"],
        "link_demo": "#",
        "link_repo": "#",
    },
    {
        "titulo": "Portfólio",
        "descricao": "Este portfólio full-stack: Angular + Tailwind v4 no front e Python (FastAPI) + PostgreSQL no back.",
        "midia": "",
        "tecnologias": ["Angular", "Tailwind", "FastAPI", "PostgreSQL"],
        "link_demo": "#",
        "link_repo": "https://github.com/santhiago4343434343/MULTSTACK-CURRICULAR-PORTIFOLIO-PREVIEW",
    },
    {
        "titulo": "Biblioteca gospel",
        "descricao": "SPA em Angular com TypeScript, estilizada com Sass e testada com Vitest, deploy no GitHub Pages.",
        "midia": "",
        "tecnologias": ["Angular", "Sass", "Node.js", "Vitest"],
        "link_demo": "#",
        "link_repo": "#",
    },
    {
        "titulo": "e-paciente Multstack",
        "descricao": "Java 21 & Spring Boot 4.1 com Spring Security + JWT (stateless, BCrypt), PostgreSQL 16 em produção e H2 em testes, Docker + Docker Compose e script start.sh.",
        "midia": "",
        "tecnologias": ["SpringBoot", "Angular", "Docker", "PostgreSQL", "Tomcat"],
        "link_demo": "#",
        "link_repo": "#",
    },
   
]

