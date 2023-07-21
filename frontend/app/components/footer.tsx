import Matrehska from "./shared/matryohska";

export default function Footer() {
  return (
    <footer className="footer">
      <style jsx>{`
        .footer {
          padding: var(--space-small) 0;
          margin-top: var(--space-med);
          background: var(--main-dark);
          color: var(--main-light);
          position: relative;
          z-index: 1;
        }
        .matrehska-logo {
          grid-column: 1/2;
        }
        .social,
        .address {
          margin-bottom: 1rem;
        }
        address {
          font-style: normal;
          color: var(--main-gray);
        }
        .social,
        .creds,
        .author {
          grid-column: 3/4;
        }

        .creds {
          grid-row: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: var(--space-small);
        }

        .contacts a {
          display: block;
        }
        span {
          color: var(--main-gray);
        }
        @media all and (max-width: 1024px) {
          .social,
          .creds,
          .author {
            grid-column: 2/4;
          }
        }
        @media all and (max-width: 768px) and (orientation: portrait) {
          .footer {
            font-size: 16px;
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .matrehska-logo {
            grid-row: 5;
            grid-column: 1/4;
            margin-top: 2rem;
          }
          .social,
          .creds {
            grid-column: 1/4;
          }
          .social {
            grid-row: 2;
            margin-bottom: 1rem;
          }
          .author {
            grid-column: 1/4;
            grid-row: 6;
            margin-top: 1rem;
          }

          .address {
            margin-bottom: 0;
          }
          .creds {
            grid-gap: 1rem;
            grid-row: 3;
            grid-template-columns: 1fr;
          }
        }
        @media all and (max-width: 1024px) and (orientation: landscape) {
          .matrehska-logo {
            width: 12rem;
          }
        }
      `}</style>
      <div className="wrapp container">
        <div className="matrehska-logo">
          <Matrehska style={{ fill: "var(--main-light)" }} />
        </div>
        <div className="social">
          <h4>Мы в соцсетях</h4>
          <ul>
            <li>
              <span>
                <a
                  href="#"
                  onClick={() =>
                    !window.open("http://instagram.com/_u/yulianalegkodumova/")
                  }
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="#"
                  onClick={() =>
                    !window.open("tg://resolve?domain=YulianaLegkodumova")
                  }
                >
                  Telegram
                </a>
              </span>
            </li>
            <li>
              <span>
                <a
                  href="#"
                  onClick={() => !window.open("https://vk.com/matreshkaflower")}
                >
                  В контакте
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="creds">
          <div className="address">
            <h4>Адрес</h4>
            <address>Калининград, улица Виктора Гакуна, 5Б</address>
          </div>
          <div className="contacts">
            <h4>Контакты</h4>
            <span>
              <a href="tel:+79114939999">7 911 493-99-99</a>
              <a href="mail:+79114939999">matreshkaflower@bk.ru</a>
            </span>
          </div>
        </div>
        <address className="author">
          <a rel="author" href="https://039.studio" target="_blank">
            <svg
              width="120px"
              viewBox="0 0 675 156"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.839844"
                width="232.088"
                height="118.807"
                fill="#D60303"
              />
              <path
                d="M69.4019 69.2602C69.4019 75.0564 68.7094 80.1902 67.3243 84.6615C65.9812 89.0915 64.0295 92.7969 61.4692 95.7778C58.9509 98.8415 55.845 101.16 52.1515 102.733C48.4999 104.265 44.3447 105.031 39.6858 105.031C35.0689 105.031 30.9137 104.265 27.2201 102.733C23.5266 101.16 20.3997 98.8415 17.8394 95.7778C15.2371 92.7969 13.2435 89.0915 11.8584 84.6615C10.5153 80.1902 9.84375 75.0564 9.84375 69.2602V47.8349C9.84375 42.0387 10.5153 36.9256 11.8584 32.4957C13.2435 28.0243 15.2162 24.2568 17.7764 21.1931C20.3367 18.1708 23.4427 15.8937 27.0942 14.3618C30.7878 12.7886 34.943 12.002 39.5599 12.002C44.2188 12.002 48.374 12.7886 52.0256 14.3618C55.7191 15.8937 58.867 18.1708 61.4692 21.1931C63.9876 24.2568 65.9393 28.0243 67.3243 32.4957C68.7094 36.9256 69.4019 42.0387 69.4019 47.8349V69.2602ZM24.9537 63.9815L54.1032 42.1836C53.9353 38.9543 53.4736 36.1597 52.7181 33.7998C52.0046 31.4399 50.9763 29.5148 49.6332 28.0243C48.4579 26.6995 47.0099 25.7058 45.2891 25.0434C43.6102 24.381 41.7005 24.0498 39.5599 24.0498C37.2514 24.0498 35.2158 24.4431 33.453 25.2297C31.6902 26.0163 30.2211 27.1756 29.0459 28.7074C27.6608 30.4463 26.6325 32.7027 25.961 35.4766C25.2894 38.2091 24.9537 41.4384 24.9537 45.1645V57.3365C24.9537 58.9098 24.9537 60.1104 24.9537 60.9385C24.9537 61.7665 24.9537 62.7808 24.9537 63.9815ZM54.2291 71.7443V60.3175C54.2291 59.2824 54.2291 58.206 54.2291 57.0881C54.2291 55.9703 54.2291 54.8111 54.2291 53.6104L25.0796 75.2841C25.2894 78.1408 25.7301 80.6663 26.4017 82.8605C27.1152 85.0548 28.0596 86.8765 29.2348 88.3255C30.41 89.8988 31.858 91.0787 33.5789 91.8654C35.3417 92.652 37.3773 93.0453 39.6858 93.0453C41.9523 93.0453 43.946 92.6727 45.6668 91.9275C47.3877 91.1408 48.8567 90.0023 50.0739 88.5118C51.4589 86.773 52.4873 84.4959 53.1588 81.6806C53.8723 78.8653 54.2291 75.5532 54.2291 71.7443Z"
                fill="white"
              />
              <path
                d="M103.966 51.8095H112.969C115.655 51.8095 118.005 51.4575 120.02 50.7537C122.035 50.0085 123.693 48.9735 124.994 47.6486C126.211 46.4894 127.134 45.061 127.764 43.3636C128.435 41.6247 128.771 39.7616 128.771 37.7744C128.771 35.6215 128.456 33.6963 127.827 31.9989C127.239 30.3014 126.358 28.8523 125.183 27.6517C124.007 26.5339 122.517 25.6644 120.713 25.0434C118.95 24.4224 116.914 24.1119 114.606 24.1119C112.549 24.1119 110.639 24.4224 108.877 25.0434C107.156 25.623 105.666 26.4718 104.407 27.5896C103.105 28.7074 102.077 30.053 101.322 31.6262C100.608 33.1995 100.251 34.9591 100.251 36.9049H85.2044C85.2044 33.303 85.9389 29.9909 87.4079 26.9686C88.8769 23.9463 90.9126 21.3173 93.5148 19.0816C96.1171 16.8873 99.181 15.1692 102.707 13.9271C106.274 12.6851 110.178 12.0641 114.417 12.0641C118.74 12.0641 122.706 12.623 126.316 13.7408C129.967 14.8173 133.073 16.4319 135.634 18.5848C138.236 20.7791 140.251 23.4702 141.678 26.6581C143.105 29.846 143.818 33.5514 143.818 37.7744C143.818 39.6374 143.524 41.5005 142.937 43.3636C142.391 45.2266 141.552 47.0276 140.418 48.7664C139.285 50.4639 137.858 52.0579 136.137 53.5483C134.416 55.0388 132.402 56.3015 130.093 57.3365C132.822 58.2474 135.13 59.448 137.019 60.9385C138.949 62.3875 140.523 64.0229 141.741 65.8445C142.958 67.7076 143.839 69.7156 144.385 71.8685C144.93 73.9799 145.203 76.1742 145.203 78.4513C145.203 82.6742 144.406 86.4418 142.811 89.7539C141.258 93.0246 139.117 95.7778 136.389 98.0135C133.619 100.291 130.345 102.029 126.568 103.23C122.832 104.389 118.782 104.969 114.417 104.969C110.472 104.969 106.673 104.431 103.021 103.354C99.3699 102.278 96.1591 100.663 93.3889 98.5103C90.6188 96.3574 88.3943 93.7077 86.7154 90.5612C85.0785 87.3733 84.26 83.6679 84.26 79.4449H99.307C99.307 81.4322 99.6637 83.2746 100.377 84.972C101.133 86.6281 102.203 88.0357 103.588 89.195C104.931 90.3956 106.526 91.3271 108.373 91.9896C110.262 92.652 112.339 92.9832 114.606 92.9832C117.04 92.9832 119.223 92.6727 121.153 92.0517C123.126 91.3892 124.784 90.4163 126.127 89.1329C127.428 87.9322 128.415 86.4418 129.086 84.6615C129.8 82.8398 130.156 80.7698 130.156 78.4513C130.156 75.843 129.758 73.6073 128.96 71.7443C128.163 69.8812 127.008 68.3286 125.497 67.0866C123.986 65.8859 122.161 64.9958 120.02 64.4162C117.922 63.7952 115.571 63.4847 112.969 63.4847H103.966V51.8095Z"
                fill="white"
              />
              <path
                d="M177.69 91.4927C182.894 91.4927 187.322 90.9131 190.974 89.7539C194.625 88.5946 197.626 86.9386 199.977 84.7857C202.495 82.4258 204.342 79.7347 205.517 76.7124C206.692 73.6487 207.448 70.3573 207.783 66.8382V66.5277C206.86 67.5627 205.79 68.5356 204.573 69.4465C203.397 70.3159 202.096 71.0818 200.669 71.7443C199.158 72.4481 197.479 73.007 195.633 73.421C193.828 73.835 191.834 74.042 189.652 74.042C185.203 74.042 181.32 73.214 178.004 71.5579C174.731 69.9019 172.002 67.6869 169.82 64.913C167.595 62.0977 165.937 58.8684 164.846 55.2251C163.755 51.5817 163.209 47.7521 163.209 43.7362C163.209 39.389 163.86 35.311 165.161 31.502C166.504 27.6517 168.435 24.2775 170.953 21.3794C173.471 18.5227 176.556 16.2663 180.208 14.6102C183.901 12.9128 188.099 12.0641 192.799 12.0641C197.542 12.0641 201.74 12.9542 205.391 14.7344C209.085 16.5147 212.212 18.9367 214.772 22.0004C217.458 25.3125 219.494 29.3285 220.879 34.0482C222.264 38.7266 222.956 43.6534 222.956 48.8285V54.0451C222.956 61.1662 222.117 67.956 220.438 74.4146C218.759 80.8733 215.8 86.5246 211.561 91.3685C208.119 95.3431 203.586 98.4689 197.962 100.746C192.38 103.023 185.643 104.162 177.753 104.162H176.493V91.4927H177.69ZM192.862 62.3047C194.625 62.3047 196.283 62.0356 197.836 61.4974C199.431 60.9592 200.879 60.1932 202.18 59.1996C203.481 58.2474 204.615 57.1295 205.58 55.8461C206.587 54.5212 207.406 53.0929 208.035 51.561V46.4066C208.035 42.8046 207.616 39.6167 206.776 36.8428C205.979 34.0689 204.908 31.7504 203.565 29.8874C202.18 28.0243 200.564 26.6167 198.718 25.6644C196.871 24.6708 194.898 24.174 192.799 24.174C190.449 24.174 188.35 24.6915 186.504 25.7265C184.699 26.7202 183.188 28.0864 181.971 29.8253C180.712 31.5641 179.746 33.6135 179.075 35.9734C178.445 38.2919 178.13 40.7346 178.13 43.3015C178.13 45.7855 178.424 48.1661 179.012 50.4432C179.599 52.7203 180.523 54.749 181.782 56.5292C182.999 58.2681 184.51 59.6757 186.315 60.7522C188.162 61.7872 190.344 62.3047 192.862 62.3047Z"
                fill="white"
              />
              <path
                d="M1.58926 129.099H4.80488L10.8485 145.22L16.8778 129.099H20.0935L12.1118 150H9.55654L1.58926 129.099ZM0.125 129.099H3.18271L3.71387 143.052V150H0.125V129.099ZM18.5 129.099H21.5721V150H17.9688V143.052L18.5 129.099Z"
                fill="#D60303"
              />
              <path
                d="M35.7179 131.884L29.4733 150H25.6978L33.5646 129.099H35.9763L35.7179 131.884ZM40.9433 150L34.6844 131.884L34.4116 129.099H36.8377L44.7332 150H40.9433ZM40.6419 142.248V145.105H29.2723V142.248H40.6419Z"
                fill="#D60303"
              />
              <path
                d="M60.6591 143.196H64.248C64.1332 144.564 63.7504 145.785 63.0996 146.856C62.4488 147.919 61.5348 148.756 60.3577 149.369C59.1805 149.981 57.7498 150.287 56.0654 150.287C54.7734 150.287 53.6106 150.058 52.577 149.598C51.5434 149.129 50.6582 148.469 49.9212 147.617C49.1843 146.756 48.6197 145.718 48.2273 144.502C47.8445 143.287 47.6531 141.928 47.6531 140.425V138.688C47.6531 137.186 47.8493 135.827 48.2417 134.611C48.6436 133.396 49.2178 132.357 49.9643 131.496C50.7108 130.625 51.6056 129.96 52.6488 129.501C53.7015 129.041 54.8835 128.812 56.1946 128.812C57.8598 128.812 59.2667 129.118 60.4151 129.73C61.5635 130.343 62.4536 131.19 63.0852 132.271C63.7264 133.353 64.1188 134.592 64.2624 135.989H60.6735C60.5778 135.09 60.3672 134.319 60.0419 133.678C59.726 133.037 59.2571 132.549 58.635 132.214C58.0129 131.869 57.1995 131.697 56.1946 131.697C55.3715 131.697 54.6538 131.85 54.0413 132.156C53.4288 132.463 52.9168 132.913 52.5052 133.506C52.0937 134.099 51.7827 134.831 51.5721 135.702C51.3712 136.564 51.2707 137.549 51.2707 138.659V140.425C51.2707 141.478 51.3616 142.435 51.5434 143.296C51.7348 144.148 52.0219 144.88 52.4047 145.493C52.7971 146.105 53.2948 146.579 53.8977 146.914C54.5006 147.249 55.2232 147.416 56.0654 147.416C57.0894 147.416 57.9172 147.254 58.5489 146.928C59.1901 146.603 59.6734 146.129 59.9988 145.507C60.3337 144.875 60.5539 144.105 60.6591 143.196Z"
                fill="#D60303"
              />
              <path
                d="M77.1593 129.099V150H73.5848V129.099H77.1593ZM83.7198 129.099V131.97H67.0818V129.099H83.7198Z"
                fill="#D60303"
              />
              <path
                d="M101.627 147.144V150H90.53V147.144H101.627ZM91.5492 129.099V150H87.946V129.099H91.5492ZM100.177 137.827V140.641H90.53V137.827H100.177ZM101.555 129.099V131.97H90.53V129.099H101.555Z"
                fill="#D60303"
              />
              <path
                d="M113.978 142.205H108.537V139.349H113.978C114.926 139.349 115.691 139.195 116.275 138.889C116.859 138.583 117.285 138.162 117.553 137.626C117.83 137.08 117.969 136.458 117.969 135.76C117.969 135.099 117.83 134.482 117.553 133.908C117.285 133.324 116.859 132.855 116.275 132.501C115.691 132.147 114.926 131.97 113.978 131.97H109.643V150H106.04V129.099H113.978C115.596 129.099 116.969 129.386 118.098 129.96C119.237 130.525 120.103 131.309 120.697 132.314C121.29 133.31 121.587 134.449 121.587 135.731C121.587 137.08 121.29 138.238 120.697 139.205C120.103 140.172 119.237 140.913 118.098 141.43C116.969 141.947 115.596 142.205 113.978 142.205Z"
                fill="#D60303"
              />
              <path
                d="M138.632 143.196H142.221C142.106 144.564 141.724 145.785 141.073 146.856C140.422 147.919 139.508 148.756 138.331 149.369C137.154 149.981 135.723 150.287 134.039 150.287C132.747 150.287 131.584 150.058 130.55 149.598C129.517 149.129 128.631 148.469 127.894 147.617C127.157 146.756 126.593 145.718 126.2 144.502C125.818 143.287 125.626 141.928 125.626 140.425V138.688C125.626 137.186 125.822 135.827 126.215 134.611C126.617 133.396 127.191 132.357 127.937 131.496C128.684 130.625 129.579 129.96 130.622 129.501C131.675 129.041 132.857 128.812 134.168 128.812C135.833 128.812 137.24 129.118 138.388 129.73C139.537 130.343 140.427 131.19 141.058 132.271C141.7 133.353 142.092 134.592 142.236 135.989H138.647C138.551 135.09 138.34 134.319 138.015 133.678C137.699 133.037 137.23 132.549 136.608 132.214C135.986 131.869 135.173 131.697 134.168 131.697C133.345 131.697 132.627 131.85 132.014 132.156C131.402 132.463 130.89 132.913 130.478 133.506C130.067 134.099 129.756 134.831 129.545 135.702C129.344 136.564 129.244 137.549 129.244 138.659V140.425C129.244 141.478 129.335 142.435 129.517 143.296C129.708 144.148 129.995 144.88 130.378 145.493C130.77 146.105 131.268 146.579 131.871 146.914C132.474 147.249 133.196 147.416 134.039 147.416C135.063 147.416 135.89 147.254 136.522 146.928C137.163 146.603 137.647 146.129 137.972 145.507C138.307 144.875 138.527 144.105 138.632 143.196Z"
                fill="#D60303"
              />
              <path
                d="M150.625 129.099V150H147.036V129.099H150.625ZM163.2 129.099L154.702 141.014H149.606L149.118 137.884H152.706L158.793 129.099H163.2ZM159.525 150L152.764 140.468L155.089 137.698L163.846 150H159.525Z"
                fill="#D60303"
              />
              <path
                d="M175.523 131.884L169.278 150H165.503L173.37 129.099H175.781L175.523 131.884ZM180.748 150L174.489 131.884L174.217 129.099H176.643L184.538 150H180.748ZM180.447 142.248V145.105H169.077V142.248H180.447Z"
                fill="#D60303"
              />
              <path
                d="M199.675 142.162H193.918L192.497 141.574C190.918 141.076 189.707 140.32 188.865 139.305C188.023 138.291 187.602 137.013 187.602 135.473C187.602 134.094 187.908 132.932 188.52 131.984C189.133 131.037 190.004 130.319 191.133 129.831C192.272 129.343 193.617 129.099 195.167 129.099H202.187V150H198.569V131.97H195.167C193.827 131.97 192.832 132.295 192.181 132.946C191.53 133.597 191.205 134.496 191.205 135.645C191.205 136.43 191.348 137.104 191.636 137.669C191.932 138.224 192.368 138.655 192.942 138.961C193.526 139.258 194.248 139.406 195.11 139.406H199.675V142.162ZM195.282 140.554L190.43 150H186.554L191.463 140.554H195.282Z"
                fill="#D60303"
              />
              <path
                d="M224.478 140.554H219.152L219.123 137.927H223.775C224.559 137.927 225.224 137.812 225.77 137.583C226.325 137.344 226.746 137.004 227.033 136.564C227.32 136.114 227.464 135.573 227.464 134.941C227.464 134.243 227.33 133.673 227.062 133.233C226.794 132.793 226.383 132.472 225.827 132.271C225.282 132.07 224.583 131.97 223.732 131.97H220.243V150H216.64V129.099H223.732C224.88 129.099 225.904 129.209 226.804 129.429C227.713 129.649 228.483 129.994 229.115 130.463C229.756 130.922 230.239 131.506 230.565 132.214C230.9 132.922 231.067 133.764 231.067 134.74C231.067 135.602 230.861 136.391 230.45 137.109C230.038 137.817 229.431 138.396 228.627 138.846C227.823 139.296 226.823 139.564 225.626 139.65L224.478 140.554ZM224.32 150H218.018L219.64 147.144H224.32C225.134 147.144 225.813 147.01 226.359 146.742C226.904 146.464 227.311 146.086 227.579 145.608C227.856 145.119 227.995 144.55 227.995 143.899C227.995 143.22 227.875 142.631 227.636 142.133C227.397 141.626 227.019 141.239 226.502 140.971C225.985 140.693 225.311 140.554 224.478 140.554H220.43L220.458 137.927H225.727L226.545 138.918C227.694 138.956 228.636 139.21 229.373 139.679C230.12 140.148 230.675 140.755 231.038 141.502C231.402 142.248 231.584 143.052 231.584 143.914C231.584 145.244 231.292 146.359 230.708 147.258C230.134 148.158 229.306 148.842 228.225 149.311C227.143 149.771 225.842 150 224.32 150Z"
                fill="#D60303"
              />
              <path
                d="M250.367 147.144V150H239.27V147.144H250.367ZM240.289 129.099V150H236.686V129.099H240.289ZM248.917 137.827V140.641H239.27V137.827H248.917ZM250.295 129.099V131.97H239.27V129.099H250.295Z"
                fill="#D60303"
              />
              <path
                d="M268.03 129.099V131.97H258.311V150H254.722V129.099H268.03ZM257.22 137.123H262.474C264.063 137.123 265.422 137.391 266.551 137.927C267.68 138.454 268.542 139.195 269.135 140.152C269.728 141.109 270.025 142.224 270.025 143.497C270.025 144.454 269.858 145.33 269.523 146.124C269.188 146.919 268.695 147.608 268.044 148.192C267.393 148.766 266.599 149.211 265.661 149.527C264.733 149.842 263.67 150 262.474 150H254.722V129.099H258.34V147.144H262.474C263.383 147.144 264.13 146.976 264.714 146.641C265.297 146.297 265.728 145.847 266.005 145.292C266.293 144.737 266.436 144.129 266.436 143.469C266.436 142.827 266.293 142.244 266.005 141.717C265.728 141.191 265.297 140.77 264.714 140.454C264.13 140.138 263.383 139.98 262.474 139.98H257.22V137.123Z"
                fill="#D60303"
              />
              <path
                d="M281.357 139.693V142.449H273.763V139.693H281.357Z"
                fill="#D60303"
              />
              <path
                d="M294.139 142.205H288.699V139.349H294.139C295.087 139.349 295.852 139.195 296.436 138.889C297.02 138.583 297.446 138.162 297.714 137.626C297.991 137.08 298.13 136.458 298.13 135.76C298.13 135.099 297.991 134.482 297.714 133.908C297.446 133.324 297.02 132.855 296.436 132.501C295.852 132.147 295.087 131.97 294.139 131.97H289.804V150H286.201V129.099H294.139C295.757 129.099 297.13 129.386 298.259 129.96C299.398 130.525 300.264 131.309 300.858 132.314C301.451 133.31 301.748 134.449 301.748 135.731C301.748 137.08 301.451 138.238 300.858 139.205C300.264 140.172 299.398 140.913 298.259 141.43C297.13 141.947 295.757 142.205 294.139 142.205Z"
                fill="#D60303"
              />
              <path
                d="M312.405 131.884L306.161 150H302.385L310.252 129.099H312.664L312.405 131.884ZM317.631 150L311.372 131.884L311.099 129.099H313.525L321.42 150H317.631ZM317.329 142.248V145.105H305.96V142.248H317.329Z"
                fill="#D60303"
              />
              <path
                d="M332.394 139.98H329.494V137.927H331.992C332.882 137.927 333.604 137.798 334.16 137.54C334.715 137.272 335.117 136.903 335.365 136.434C335.624 135.956 335.753 135.401 335.753 134.769C335.753 134.204 335.609 133.688 335.322 133.219C335.045 132.75 334.614 132.377 334.03 132.099C333.447 131.812 332.695 131.668 331.777 131.668C331.087 131.668 330.461 131.793 329.896 132.042C329.331 132.29 328.882 132.64 328.547 133.09C328.221 133.539 328.058 134.071 328.058 134.683H324.455C324.455 133.774 324.647 132.96 325.029 132.243C325.422 131.515 325.953 130.898 326.623 130.391C327.302 129.883 328.082 129.496 328.963 129.228C329.853 128.95 330.791 128.812 331.777 128.812C332.925 128.812 333.963 128.941 334.892 129.199C335.82 129.448 336.619 129.821 337.289 130.319C337.959 130.817 338.471 131.439 338.825 132.185C339.179 132.922 339.356 133.779 339.356 134.755C339.356 135.473 339.189 136.147 338.854 136.779C338.528 137.411 338.059 137.966 337.447 138.444C336.834 138.923 336.098 139.301 335.236 139.578C334.384 139.846 333.437 139.98 332.394 139.98ZM329.494 138.731H332.394C333.552 138.731 334.581 138.851 335.48 139.09C336.38 139.329 337.141 139.679 337.763 140.138C338.385 140.597 338.859 141.167 339.184 141.846C339.509 142.516 339.672 143.287 339.672 144.158C339.672 145.134 339.476 146.005 339.083 146.77C338.701 147.526 338.155 148.168 337.447 148.694C336.739 149.22 335.901 149.617 334.935 149.885C333.978 150.153 332.925 150.287 331.777 150.287C330.848 150.287 329.929 150.173 329.02 149.943C328.121 149.704 327.302 149.34 326.565 148.852C325.838 148.354 325.254 147.723 324.814 146.957C324.374 146.191 324.154 145.273 324.154 144.201H327.771C327.771 144.794 327.939 145.34 328.274 145.837C328.618 146.325 329.087 146.718 329.681 147.014C330.284 147.301 330.982 147.445 331.777 147.445C332.686 147.445 333.456 147.301 334.088 147.014C334.729 146.727 335.217 146.335 335.552 145.837C335.897 145.34 336.069 144.78 336.069 144.158C336.069 143.564 335.978 143.052 335.796 142.622C335.624 142.181 335.365 141.827 335.021 141.559C334.676 141.282 334.25 141.076 333.743 140.942C333.236 140.808 332.652 140.741 331.992 140.741H329.494V138.731Z"
                fill="#D60303"
              />
              <path
                d="M352.497 142.205H347.056V139.349H352.497C353.445 139.349 354.21 139.195 354.794 138.889C355.378 138.583 355.804 138.162 356.072 137.626C356.349 137.08 356.488 136.458 356.488 135.76C356.488 135.099 356.349 134.482 356.072 133.908C355.804 133.324 355.378 132.855 354.794 132.501C354.21 132.147 353.445 131.97 352.497 131.97H348.162V150H344.559V129.099H352.497C354.115 129.099 355.488 129.386 356.617 129.96C357.756 130.525 358.622 131.309 359.216 132.314C359.809 133.31 360.106 134.449 360.106 135.731C360.106 137.08 359.809 138.238 359.216 139.205C358.622 140.172 357.756 140.913 356.617 141.43C355.488 141.947 354.115 142.205 352.497 142.205Z"
                fill="#D60303"
              />
              <path
                d="M370.763 131.884L364.518 150H360.743L368.61 129.099H371.021L370.763 131.884ZM375.988 150L369.729 131.884L369.457 129.099H371.883L379.778 150H375.988ZM375.687 142.248V145.105H364.317V142.248H375.687Z"
                fill="#D60303"
              />
              <path
                d="M396.838 129.099V131.97H387.12V150H383.531V129.099H396.838ZM386.029 137.123H391.283C392.872 137.123 394.23 137.391 395.36 137.927C396.489 138.454 397.35 139.195 397.944 140.152C398.537 141.109 398.834 142.224 398.834 143.497C398.834 144.454 398.666 145.33 398.331 146.124C397.996 146.919 397.504 147.608 396.853 148.192C396.202 148.766 395.408 149.211 394.47 149.527C393.541 149.842 392.479 150 391.283 150H383.531V129.099H387.148V147.144H391.283C392.192 147.144 392.938 146.976 393.522 146.641C394.106 146.297 394.537 145.847 394.814 145.292C395.101 144.737 395.245 144.129 395.245 143.469C395.245 142.827 395.101 142.244 394.814 141.717C394.537 141.191 394.106 140.77 393.522 140.454C392.938 140.138 392.192 139.98 391.283 139.98H386.029V137.123Z"
                fill="#D60303"
              />
              <path
                d="M420.215 138.975V140.124C420.215 141.703 420.009 143.119 419.598 144.373C419.186 145.627 418.597 146.694 417.832 147.574C417.076 148.455 416.167 149.129 415.104 149.598C414.042 150.058 412.865 150.287 411.573 150.287C410.29 150.287 409.118 150.058 408.056 149.598C407.003 149.129 406.089 148.455 405.314 147.574C404.539 146.694 403.936 145.627 403.505 144.373C403.084 143.119 402.873 141.703 402.873 140.124V138.975C402.873 137.396 403.084 135.985 403.505 134.74C403.926 133.487 404.52 132.42 405.285 131.539C406.06 130.649 406.974 129.974 408.027 129.515C409.089 129.046 410.262 128.812 411.544 128.812C412.836 128.812 414.013 129.046 415.076 129.515C416.138 129.974 417.052 130.649 417.817 131.539C418.583 132.42 419.172 133.487 419.583 134.74C420.004 135.985 420.215 137.396 420.215 138.975ZM416.612 140.124V138.947C416.612 137.779 416.497 136.75 416.267 135.86C416.047 134.961 415.717 134.209 415.277 133.606C414.846 132.994 414.315 132.534 413.683 132.228C413.051 131.912 412.338 131.754 411.544 131.754C410.75 131.754 410.042 131.912 409.42 132.228C408.797 132.534 408.266 132.994 407.826 133.606C407.395 134.209 407.065 134.961 406.836 135.86C406.606 136.75 406.491 137.779 406.491 138.947V140.124C406.491 141.291 406.606 142.325 406.836 143.225C407.065 144.124 407.4 144.885 407.84 145.507C408.29 146.12 408.826 146.584 409.448 146.9C410.07 147.206 410.779 147.359 411.573 147.359C412.377 147.359 413.09 147.206 413.712 146.9C414.334 146.584 414.86 146.12 415.291 145.507C415.722 144.885 416.047 144.124 416.267 143.225C416.497 142.325 416.612 141.291 416.612 140.124Z"
                fill="#D60303"
              />
              <path
                d="M433.169 129.099V150H429.595V129.099H433.169ZM439.73 129.099V131.97H423.092V129.099H439.73Z"
                fill="#D60303"
              />
              <path
                d="M447.617 129.099V150H444.028V129.099H447.617ZM460.192 129.099L451.694 141.014H446.597L446.109 137.884H449.698L455.785 129.099H460.192ZM456.517 150L449.756 140.468L452.081 137.698L460.838 150H456.517Z"
                fill="#D60303"
              />
              <path
                d="M467.935 144.129L477.209 129.099H480.812V150H477.209V134.956L467.935 150H464.346V129.099H467.935V144.129Z"
                fill="#D60303"
              />
              <path
                d="M498.955 144.129L508.228 129.099H511.831V150H508.228V134.956L498.955 150H495.366V129.099H498.955V144.129Z"
                fill="#D60303"
              />
              <path
                d="M542.922 147.144V150H527.519V147.144H542.922ZM528.409 147.144V155.14H524.964L524.835 147.144H528.409ZM545.707 147.144L545.492 155.125H542.104V147.144H545.707ZM540.396 129.099V131.97H530.749V129.099H540.396ZM543.152 129.099V150H539.563V129.099H543.152ZM530.031 129.099H533.634L533.132 137.568C533.055 138.908 532.917 140.114 532.716 141.186C532.515 142.258 532.271 143.22 531.984 144.071C531.706 144.914 531.39 145.66 531.036 146.311C530.682 146.952 530.304 147.507 529.902 147.976C529.5 148.445 529.089 148.847 528.667 149.182C528.256 149.507 527.849 149.78 527.447 150H525.524V147.144H526.457C526.715 146.904 527.002 146.56 527.318 146.11C527.634 145.651 527.94 145.052 528.237 144.316C528.543 143.569 528.811 142.646 529.041 141.545C529.27 140.444 529.428 139.119 529.514 137.568L530.031 129.099Z"
                fill="#D60303"
              />
              <path
                d="M553.465 144.129L562.739 129.099H566.342V150H562.739V134.956L553.465 150H549.876V129.099H553.465V144.129Z"
                fill="#D60303"
              />
              <path
                d="M579.296 139.98H576.397V137.927H578.894C579.784 137.927 580.507 137.798 581.062 137.54C581.617 137.272 582.019 136.903 582.268 136.434C582.526 135.956 582.656 135.401 582.656 134.769C582.656 134.204 582.512 133.688 582.225 133.219C581.947 132.75 581.517 132.377 580.933 132.099C580.349 131.812 579.598 131.668 578.679 131.668C577.99 131.668 577.363 131.793 576.799 132.042C576.234 132.29 575.784 132.64 575.449 133.09C575.124 133.539 574.961 134.071 574.961 134.683H571.358C571.358 133.774 571.549 132.96 571.932 132.243C572.324 131.515 572.856 130.898 573.525 130.391C574.205 129.883 574.985 129.496 575.865 129.228C576.755 128.95 577.693 128.812 578.679 128.812C579.828 128.812 580.866 128.941 581.794 129.199C582.723 129.448 583.522 129.821 584.192 130.319C584.862 130.817 585.373 131.439 585.728 132.185C586.082 132.922 586.259 133.779 586.259 134.755C586.259 135.473 586.091 136.147 585.756 136.779C585.431 137.411 584.962 137.966 584.349 138.444C583.737 138.923 583 139.301 582.139 139.578C581.287 139.846 580.339 139.98 579.296 139.98ZM576.397 138.731H579.296C580.454 138.731 581.483 138.851 582.383 139.09C583.282 139.329 584.043 139.679 584.665 140.138C585.287 140.597 585.761 141.167 586.086 141.846C586.412 142.516 586.575 143.287 586.575 144.158C586.575 145.134 586.378 146.005 585.986 146.77C585.603 147.526 585.058 148.168 584.349 148.694C583.641 149.22 582.804 149.617 581.837 149.885C580.88 150.153 579.828 150.287 578.679 150.287C577.751 150.287 576.832 150.173 575.923 149.943C575.023 149.704 574.205 149.34 573.468 148.852C572.741 148.354 572.157 147.723 571.717 146.957C571.276 146.191 571.056 145.273 571.056 144.201H574.674C574.674 144.794 574.841 145.34 575.176 145.837C575.521 146.325 575.99 146.718 576.583 147.014C577.186 147.301 577.885 147.445 578.679 147.445C579.588 147.445 580.359 147.301 580.99 147.014C581.632 146.727 582.12 146.335 582.455 145.837C582.799 145.34 582.971 144.78 582.971 144.158C582.971 143.564 582.88 143.052 582.699 142.622C582.526 142.181 582.268 141.827 581.923 141.559C581.579 141.282 581.153 141.076 580.646 140.942C580.139 140.808 579.555 140.741 578.894 140.741H576.397V138.731Z"
                fill="#D60303"
              />
              <path
                d="M599.601 131.884L593.356 150H589.581L597.447 129.099H599.859L599.601 131.884ZM604.826 150L598.567 131.884L598.294 129.099H600.72L608.616 150H604.826ZM604.525 142.248V145.105H593.155V142.248H604.525Z"
                fill="#D60303"
              />
              <path
                d="M615.986 144.129L625.26 129.099H628.863V150H625.26V134.956L615.986 150H612.397V129.099H615.986V144.129ZM622.776 123.744H625.346C625.346 124.538 625.154 125.242 624.772 125.854C624.398 126.457 623.862 126.931 623.164 127.276C622.475 127.62 621.652 127.792 620.695 127.792C619.25 127.792 618.106 127.419 617.264 126.673C616.431 125.917 616.015 124.94 616.015 123.744H618.584C618.584 124.28 618.742 124.754 619.058 125.165C619.383 125.567 619.929 125.768 620.695 125.768C621.451 125.768 621.987 125.567 622.302 125.165C622.618 124.754 622.776 124.28 622.776 123.744Z"
                fill="#D60303"
              />
              <path
                d="M648.464 137.827V140.684H637.367V137.827H648.464ZM638.257 129.099V150H634.654V129.099H638.257ZM651.234 129.099V150H647.646V129.099H651.234Z"
                fill="#D60303"
              />
              <path
                d="M665.395 131.884L659.15 150H655.375L663.241 129.099H665.653L665.395 131.884ZM670.62 150L664.361 131.884L664.088 129.099H666.514L674.41 150H670.62ZM670.319 142.248V145.105H658.949V142.248H670.319Z"
                fill="#D60303"
              />
              <path
                d="M286.605 86.9681C286.605 85.8419 286.342 84.8363 285.816 83.9514C285.331 83.0665 284.502 82.2218 283.329 81.4174C282.076 80.6934 280.439 80.0096 278.417 79.366C276.395 78.7224 273.868 78.1191 270.836 77.556C267.035 76.7917 263.558 75.8465 260.404 74.7203C257.291 73.594 254.602 72.2265 252.338 70.6175C250.114 69.0891 248.375 67.279 247.122 65.1875C245.869 63.0959 245.242 60.6624 245.242 57.887C245.242 55.2323 245.869 52.7184 247.122 50.3452C248.416 47.9319 250.256 45.8202 252.641 44.0101C254.986 42.2001 257.817 40.7722 261.132 39.7264C264.488 38.6806 268.208 38.1577 272.291 38.1577C276.658 38.1577 280.58 38.7007 284.057 39.7867C287.534 40.8325 290.486 42.2806 292.912 44.1308C295.298 45.9811 297.137 48.1732 298.431 50.7072C299.725 53.2413 300.372 55.9764 300.372 58.9127H285.877C285.877 57.706 285.614 56.5597 285.088 55.4736C284.603 54.3474 283.875 53.3418 282.905 52.4569C281.773 51.4111 280.317 50.5866 278.538 49.9832C276.759 49.3397 274.677 49.0179 272.291 49.0179C270.108 49.0179 268.187 49.2592 266.53 49.7419C264.912 50.1843 263.578 50.8078 262.527 51.6123C261.476 52.3363 260.687 53.2011 260.162 54.2066C259.636 55.172 259.373 56.1977 259.373 57.2837C259.373 58.4099 259.596 59.4356 260.04 60.3607C260.485 61.2456 261.273 62.03 262.406 62.7138C263.457 63.4378 264.912 64.1014 266.772 64.7048C268.673 65.3081 271.058 65.8511 273.929 66.3338C277.932 67.0578 281.591 67.9427 284.906 68.9885C288.222 70.0343 291.052 71.3214 293.397 72.8499C295.742 74.4588 297.562 76.3493 298.856 78.5213C300.149 80.6934 300.796 83.2676 300.796 86.2441C300.796 89.1402 300.109 91.7949 298.734 94.2082C297.4 96.6216 295.5 98.6931 293.033 100.423C290.526 102.152 287.534 103.5 284.057 104.465C280.58 105.43 276.719 105.913 272.473 105.913C267.743 105.913 263.538 105.29 259.858 104.043C256.219 102.796 253.167 101.147 250.7 99.0953C248.194 97.0842 246.293 94.7714 244.999 92.1569C243.706 89.5424 243.059 86.8877 243.059 84.1927H257.129C257.25 86.2039 257.776 87.9134 258.706 89.3212C259.676 90.6887 260.889 91.7949 262.345 92.6395C263.76 93.5244 265.377 94.168 267.197 94.5702C269.016 94.9322 270.856 95.1133 272.716 95.1133C275.223 95.1133 277.406 94.8518 279.266 94.3289C281.166 93.806 282.683 93.1021 283.815 92.2172C284.745 91.4932 285.432 90.7088 285.877 89.8642C286.362 88.9793 286.605 88.0139 286.605 86.9681Z"
                fill="#D60303"
              />
              <path
                d="M347.435 23.4362V39.3644H372.12V50.1642H347.435V81.357C347.435 83.7704 347.718 85.8017 348.285 87.4508C348.891 89.0597 349.72 90.3267 350.771 91.2519C351.822 92.2172 353.076 92.901 354.531 93.3032C355.987 93.7054 357.584 93.9066 359.323 93.9066C360.576 93.9066 361.87 93.8462 363.204 93.7256C364.538 93.6049 365.832 93.444 367.086 93.2429C368.299 93.082 369.431 92.901 370.482 92.6999C371.574 92.4585 372.483 92.2574 373.211 92.0965L374.788 102.052C373.737 102.695 372.463 103.258 370.967 103.741C369.512 104.183 367.935 104.566 366.237 104.887C364.538 105.209 362.759 105.451 360.899 105.611C359.08 105.813 357.261 105.913 355.441 105.913C352.126 105.913 349.073 105.471 346.283 104.586C343.534 103.661 341.168 102.233 339.187 100.302C337.206 98.4115 335.649 95.978 334.517 93.0015C333.426 90.0251 332.88 86.4452 332.88 82.2621V50.1642H316.99V39.3644H332.88V23.4362H347.435Z"
                fill="#D60303"
              />
              <path
                d="M435.922 104.646L435.073 95.5356C432.849 98.7936 430.14 101.348 426.946 103.198C423.752 105.008 420.174 105.913 416.211 105.913C412.815 105.913 409.702 105.39 406.871 104.344C404.082 103.258 401.676 101.589 399.654 99.3366C397.673 97.0842 396.137 94.2082 395.045 90.7088C393.953 87.1692 393.407 82.9458 393.407 78.0387V39.3644H407.902V78.1593C407.902 81.176 408.125 83.7101 408.57 85.7614C409.014 87.7726 409.722 89.3815 410.692 90.5882C411.663 91.8351 412.896 92.72 414.392 93.2429C415.888 93.7658 417.647 94.0272 419.668 94.0272C421.771 94.0272 423.651 93.806 425.309 93.3636C426.966 92.8809 428.422 92.2373 429.675 91.4329C430.727 90.7088 431.657 89.8642 432.465 88.8988C433.274 87.8932 433.961 86.7871 434.527 85.5804V39.3644H449.083V104.646H435.922Z"
                fill="#D60303"
              />
              <path
                d="M465.58 71.5226C465.58 66.5751 466.166 62.0702 467.338 58.0077C468.551 53.905 470.29 50.3855 472.554 47.4492C474.778 44.5129 477.487 42.2403 480.681 40.6314C483.916 38.9823 487.555 38.1577 491.598 38.1577C495.237 38.1577 498.411 38.8013 501.12 40.0884C503.869 41.3353 506.295 43.1252 508.398 45.4582V11.9727H522.893V104.646H509.732L509.065 97.8283C506.962 100.403 504.456 102.394 501.544 103.801C498.633 105.169 495.277 105.853 491.477 105.853C487.474 105.853 483.875 105.028 480.681 103.379C477.487 101.69 474.778 99.3568 472.554 96.3803C470.33 93.444 468.612 89.9647 467.399 85.9424C466.186 81.8799 465.58 77.4956 465.58 72.7896V71.5226ZM480.075 72.7896C480.075 75.6856 480.358 78.4208 480.924 80.995C481.49 83.5693 482.379 85.8017 483.592 87.6921C484.805 89.6631 486.362 91.2116 488.262 92.3379C490.163 93.4239 492.447 93.9669 495.116 93.9669C498.391 93.9669 501.1 93.263 503.243 91.8552C505.385 90.4072 507.104 88.4564 508.398 86.0028V57.9474C507.104 55.534 505.385 53.6234 503.243 52.2156C501.14 50.7676 498.471 50.0436 495.237 50.0436C492.528 50.0436 490.203 50.6067 488.262 51.7329C486.362 52.8592 484.825 54.4077 483.653 56.3787C482.4 58.3496 481.49 60.6423 480.924 63.2568C480.358 65.831 480.075 68.5863 480.075 71.5226V72.7896Z"
                fill="#D60303"
              />
              <path
                d="M545.454 39.3644H580.267V92.6999H599.553V104.646H545.454V92.6999H565.65V51.3709H545.454V39.3644ZM564.316 22.4708C564.316 21.3044 564.518 20.2384 564.923 19.2731C565.327 18.2675 565.913 17.4027 566.681 16.6787C567.409 15.9949 568.278 15.472 569.289 15.11C570.34 14.7078 571.513 14.5067 572.807 14.5067C574.99 14.5067 576.749 15.0698 578.083 16.1961C579.458 17.2821 580.246 18.6899 580.449 20.4195C580.732 22.1893 580.428 23.7378 579.539 25.0652C578.649 26.3523 577.356 27.2171 575.657 27.6596C574.808 28.4238 573.797 28.9266 572.625 29.1679C571.452 29.4093 570.159 29.3087 568.743 28.8662C567.288 28.4238 566.176 27.6394 565.408 26.5132C564.68 25.3467 564.316 23.9993 564.316 22.4708Z"
                fill="#D60303"
              />
              <path
                d="M614.048 71.4019C614.048 66.6556 614.736 62.2713 616.11 58.249C617.485 54.1865 619.486 50.667 622.114 47.6905C624.702 44.714 627.876 42.3811 631.636 40.6918C635.397 39.0024 639.682 38.1577 644.494 38.1577C649.305 38.1577 653.591 39.0024 657.352 40.6918C661.152 42.3811 664.367 44.714 666.995 47.6905C669.582 50.667 671.564 54.1865 672.938 58.249C674.313 62.2713 675 66.6556 675 71.4019V72.6689C675 77.4554 674.313 81.8598 672.938 85.8821C671.564 89.9044 669.582 93.4038 666.995 96.3803C664.407 99.3568 661.213 101.69 657.412 103.379C653.652 105.068 649.386 105.913 644.615 105.913C639.804 105.913 635.498 105.068 631.697 103.379C627.896 101.69 624.702 99.3568 622.114 96.3803C619.486 93.4038 617.485 89.9044 616.11 85.8821C614.736 81.8598 614.048 77.4554 614.048 72.6689V71.4019ZM628.543 72.6689C628.543 75.6052 628.846 78.3805 629.453 80.995C630.1 83.6095 631.091 85.9022 632.425 87.8731C633.719 89.8441 635.376 91.4128 637.398 92.5792C639.42 93.7054 641.825 94.2686 644.615 94.2686C647.324 94.2686 649.69 93.7054 651.711 92.5792C653.733 91.4128 655.391 89.8441 656.684 87.8731C657.978 85.9022 658.928 83.6095 659.535 80.995C660.182 78.3805 660.505 75.6052 660.505 72.6689V71.4019C660.505 68.5461 660.182 65.8109 659.535 63.1964C658.888 60.5819 657.938 58.2892 656.684 56.3183C655.35 54.3474 653.672 52.7787 651.65 51.6123C649.669 50.4458 647.284 49.8626 644.494 49.8626C641.745 49.8626 639.359 50.4458 637.337 51.6123C635.356 52.7787 633.719 54.3474 632.425 56.3183C631.091 58.2892 630.1 60.5819 629.453 63.1964C628.846 65.8109 628.543 68.5461 628.543 71.4019V72.6689Z"
                fill="#D60303"
              />
              <line
                x1="0.839844"
                y1="118.307"
                x2="675"
                y2="118.307"
                stroke="#D60303"
              />
            </svg>
          </a>
        </address>
      </div>
    </footer>
  );
}
