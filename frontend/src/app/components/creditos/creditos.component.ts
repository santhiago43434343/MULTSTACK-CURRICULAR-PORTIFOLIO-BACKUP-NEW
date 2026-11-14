import { Component } from '@angular/core';

interface Fonte {
  item: string;
  fonte: string;
  url: string;
}

@Component({
  selector: 'app-creditos',
  imports: [],
  templateUrl: './creditos.component.html',
  styleUrl: './creditos.component.css',
})
export class Creditos {
  // Fontes das imagens usadas no site (edite/adicione à vontade)
  readonly fontes: Fonte[] = [
    { item: 'Foto: engenheiro configurando servidores', fonte: 'iStock', url: 'https://www.istockphoto.com/br/foto/o-engenheiro-em-a%C3%A7%C3%A3o-configuring-servidores-gm147456329-20538868' },
    { item: 'Foto: holograma de interface de API', fonte: 'Magnific', url: 'https://www.magnific.com/br/fotos-gratis/holograma-da-interface-de-programacao-de-aplicativos_18098426.htm' },
    { item: 'Foto: laptop com interface digital HUD azul', fonte: 'Magnific', url: 'https://www.magnific.com/br/fotos-gratis/conceito-de-laptop-de-interface-digital-hud-azul_3533278.htm' },
    { item: 'Imagem: Google modo IA', fonte: 'TudoCelular', url: 'https://www.tudocelular.com/google/noticias/n232439/google-modo-ia-busca-visao-geral.html' },
    { item: 'Imagem: bolha da IA', fonte: 'Meio & Mensagem', url: 'https://www.meioemensagem.com.br/marketing/bolha-da-ia' },
    { item: 'Imagem: IA na saúde mental', fonte: 'RH Pra Você', url: 'https://rhpravoce.com.br/colab/ia-na-saude-mental-empresas-nr01' },
    { item: 'Imagem: tendências em IA', fonte: 'Infomídia', url: 'https://infomidiacomunicacao.net/tres-tendencias-em-inteligencia-artificial/' },
    { item: 'Ícone: Java', fonte: 'Flaticon', url: 'https://www.flaticon.com/free-icon/java_3291697' },
    { item: 'Logo: Java', fonte: 'Shutterstock', url: 'https://www.shutterstock.com/pt/image-vector/java-programming-language-logo-two-color-2682149339' },
    { item: 'Logo: Node.js', fonte: 'blog.lsantos.dev', url: 'https://blog.lsantos.dev/node-18/' },
    { item: 'Imagem: WSL 2', fonte: 'DesdeLinux', url: 'https://blog.desdelinux.net/en/wsl-2-0-has-already-been-released-and-these-are-its-new-features/' },
    { item: 'Logo: Ubuntu', fonte: 'Canaltech', url: 'https://canaltech.com.br/linux/ubuntu-apresenta-sua-nova-logo-211658/' },
    { item: 'Imagem: Python', fonte: 'DEV.to', url: 'https://dev.to/katholder/what-makes-python-best-programming-language-for-microservices-1f8e' },
    { item: 'Imagem: Apache Cassandra', fonte: 'Extassis Network', url: 'https://extassisnetwork.com/tutoriales/instalar-apache-cassandra-en-centos7/' },
    { item: 'Guia: Apache Cassandra', fonte: 'GitHub (mikeroyal)', url: 'https://github.com/mikeroyal/Apache-Cassandra-Guide/blob/main/README.md' },
    { item: 'Imagem: MariaDB', fonte: 'Medium', url: 'https://medium.com/@sahaayushioe/administering-mariadb-database-7ea26f225601' },
    { item: 'Logo: PostgreSQL', fonte: 'Wikipédia', url: 'https://pt.wikipedia.org/wiki/PostgreSQL#/media/Ficheiro:Postgresql_elephant.svg' },
    { item: 'Guia/Logo: Ruby on Rails', fonte: 'Rails Guides', url: 'https://guides.rubyonrails.org/getting_started.html' },
    { item: 'Logo: Ruby', fonte: 'Wikimedia Commons', url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg' },
    { item: 'Imagem: Docker', fonte: 'Claranet', url: 'https://www.claranet.com/ch-en/blog/how-do-docker-containers-work/' },
    { item: 'Imagem: Docker', fonte: 'ThinkPalm', url: 'https://thinkpalm.com/blogs/what-is-docker-how-does-it-simplify-testing/' },
    { item: 'Imagem: Visual Studio Code', fonte: 'Neowin', url: 'https://www.neowin.net/news/microsoft-releases-visual-studio-code-1112-with-integrated-browser-debugging/' },
    { item: 'Imagem: VS Code', fonte: 'TreinaWeb', url: 'https://www.treinaweb.com.br/blog/vs-code-o-que-e-e-por-que-voce-deve-usar' },
    { item: 'Logo: Apache Tomcat', fonte: 'Wikimedia Commons', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Apache_Tomcat_logo.svg' },
    { item: 'Logo: Sass/SCSS', fonte: 'PNGFind', url: 'https://www.pngfind.com/download/hRmJmoh_scss-logo-hd-png-download/' },
    { item: 'Ícone: Tailwind CSS', fonte: 'Icons8', url: 'https://icons8.com/icon/WoopfRcDj3RF/tailwind-css' },
    { item: 'Imagem: Angular', fonte: 'Reddit', url: 'https://www.reddit.com/r/Angular2/comments/17p9sfy/angulardev/' },
    { item: 'Imagem: Node.js vs Angular', fonte: 'FastComet', url: 'https://www.fastcomet.com/blog/node-js-vs-angular' },
    { item: 'Logo: npm', fonte: 'Wikipédia', url: 'https://en.wikipedia.org/wiki/Npm#/media/File:Npm-logo.svg' },
    { item: 'Imagem (repositório)', fonte: 'GitHub', url: 'https://repository-images.githubusercontent.com/148228732/4db22600-9dab-11e9-8018-e818f6820760' },
    { item: 'Logo: Apache (pena)', fonte: 'Wikimedia Commons', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Apache_Feather_Logo.svg' },
    { item: 'Logo: Sublime Text', fonte: 'Wikimedia Commons', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Sublime_Text_3_logo.png/250px-Sublime_Text_3_logo.png' },
    { item: 'Logo: Windows 10', fonte: 'NotebookCheck', url: 'https://www.notebookcheck.info/fileadmin/_processed_/webp/Notebooks/News/_nc3/20170814_Windows_10_logo-q82-w240-h.webp' },
    { item: 'Ícone (avatar)', fonte: 'Slack', url: 'https://avatars.slack-edge.com/2024-04-05/6934042159649_ac803d1cddbcbef8f110_512.png' },
    { item: 'Imagem', fonte: 'Google Imagens', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8t6YNPG_2YVFeajFhYRVOZAhPvS6TKzlnRJFeVtXXuooPs6dk8SLAMzew&s=10' },
    { item: 'Logo: TypeScript', fonte: 'Wikimedia Commons', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/250px-Typescript.svg.png' },
    { item: 'Avatar/Logo', fonte: 'GitHub', url: 'https://avatars.githubusercontent.com/u/9919?s=280&v=4' },
    { item: 'Imagem', fonte: 'Bing Imagens', url: 'https://tse2.mm.bing.net/th/id/OIP.hEo0mCW7tY98fFL2f30OkwHaEK' },
    { item: 'Logo: Apache NetBeans', fonte: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Apache_NetBeans_Logo.svg' },
    { item: 'Imagem: NetBeans', fonte: 'X (Twitter)', url: 'https://x.com/netbeans/status/1053252022663831552' },
  ];
}
