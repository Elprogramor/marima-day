/**
 * CONTEÚDO EDITÁVEL DO MARIMA DAY
 *
 * Este é o único arquivo que você precisa editar para:
 * - conectar o formulário de inscrição;
 * - adicionar, remover ou ocultar professores;
 * - adicionar, remover ou ocultar parceiros.
 *
 * Para ocultar alguém temporariamente, use: active: false
 * Para exibir novamente, use: active: true
 */

window.MARIMA_DAY_CONFIG = {
  /** Cole aqui o link público do Tally ou Google Forms. */
  registrationUrl: "https://tally.so/r/vGaJWv",

  /**
   * PROFESSORES
   *
   * Copie um bloco inteiro para adicionar outro professor.
   * Coloque a foto em assets/professors/ e informe o caminho em image.
   * Se image ficar vazio, a página exibirá um espaço editorial com as iniciais.
   */
  professors: [
    {
      active: true,
      name: "Warley Santanna",
      role: "Dança",
      description:
        "Profissional convidado para conduzir a experiência de dança com energia, leveza e conexão.",
      instagram: "@warley_santanna",
      instagramUrl: "https://www.instagram.com/warley_santanna?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      image: "assets/professors/professor-dança.png",
    },
    {
      active: true,
      name: "Vinicius Alves",
      role: "Funcional",
      description:
        "Profissional responsável por uma atividade dinâmica, acessível e adaptável a diferentes níveis.",
      instagram: "@vinialvves",
      instagramUrl: "https://www.instagram.com/vinialvves?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      image: "assets/professors/professor-funcional.png",
    },
  ],

  /**
   * PARCEIROS
   *
   * Use logos PNG/WEBP com fundo transparente em assets/partners/.
   * Copie um bloco inteiro para adicionar outro parceiro.
   */
  partners: [
    {
      active: true,
      name: "Bananinha Açaí",
      instagram: "@bananinha_vr",
      instagramUrl: "https://www.instagram.com/bananinha_vr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      logo: "assets/partners/bananinha-parceiro.png",
    },
    {
      active: true,
      name: "Carol Carvalho",
      instagram: "@carolcarvalho.acess",
      instagramUrl: "https://www.instagram.com/carolcarvalho.acess?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      logo: "assets/partners/assets/partners/carol-carvalho-parceiro.png",
    },
  ],
};
