import { useEffect, useState } from "react";
import Nav from "./shared/navigation/navigation";
import styles from "@/app/styles/footer.module.scss";
export default function Footer() {
  const [state, setState] = useState(false);
  useEffect(() => {
    typeof window !== undefined && setState(true);
  }, []);
  return (
    <>
      <footer
        className={styles.footer}
        itemScope
        itemType="http://schema.org/WPFooter"
      >
        <div className={`${styles.wrapp} container`}>
          <div className={styles.logo}>
            <svg
              viewBox="0 0 833 168"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
            >
              <g>
                <g id="Layer-1">
                  <path
                    id="path248"
                    d="M440.801,98.427c-11.385,-1.673 -20.144,-7.457 -24.765,-16.354c-1.907,-3.671 -2.791,-6.953 -2.99,-11.096c-0.28,-5.854 1.11,-10.98 4.309,-15.883c3.402,-5.216 3.804,-6.688 3.734,-13.678c-0.057,-5.755 0.377,-8.192 2.051,-11.515c4.431,-8.795 14.872,-13.93 25.071,-12.331c4.532,0.711 9.143,2.637 12.173,5.087c1.526,1.233 4.068,4.194 5.121,5.964c2.176,3.661 2.535,5.281 2.798,12.648c0.272,7.616 0.245,7.515 3.597,13.531c3.717,6.669 4.711,10.348 4.412,16.324c-0.603,12.042 -9.354,22.396 -22.078,26.119c-3.848,1.127 -10.086,1.676 -13.433,1.184Zm11.005,-3.966c15.476,-3.87 24.368,-18.406 19.709,-32.215c-0.372,-1.103 -1.816,-4.09 -3.208,-6.639c-3.225,-5.905 -3.553,-7.186 -3.553,-13.862c0,-6.178 -0.445,-8.438 -2.3,-11.678c-4.921,-8.595 -15.614,-12.166 -25.607,-8.551c-1.898,0.687 -5.157,2.808 -6.818,4.439c-2.092,2.053 -3.468,4.189 -4.476,6.949c-0.685,1.873 -0.742,2.501 -0.689,7.63c0.032,3.074 -0.095,6.383 -0.282,7.354c-0.448,2.322 -1.94,5.682 -3.656,8.235c-0.761,1.133 -1.614,2.523 -1.895,3.089c-4.894,9.854 -2.318,21.561 6.399,29.085c3.22,2.78 7.063,4.778 11.935,6.204c3.419,1.002 10.353,0.982 14.441,-0.04l0,-0Zm-12.786,-3.692c-4.865,-1.067 -10.52,-4.475 -10.52,-6.341c0,-0.455 1.441,-1.685 1.975,-1.685c0.148,-0 1.004,0.593 1.902,1.318c2.903,2.342 5.553,3.345 9.501,3.593c2.468,0.155 2.921,0.268 3.325,0.828c0.511,0.709 0.315,1.544 -0.498,2.12c-0.494,0.35 -4.335,0.462 -5.685,0.167Zm-16.99,-21.01c0.002,-1.352 0.198,-3.12 0.436,-3.929c1.34,-4.558 5.305,-8.312 10.41,-9.855c1.978,-0.599 2.173,-0.61 2.918,-0.166c0.493,0.293 0.799,0.754 0.799,1.204c-0,0.881 -1.05,1.905 -1.953,1.905c-1.071,-0 -3.847,1.424 -5.479,2.811c-1.744,1.482 -3.166,3.904 -3.468,5.902l-0.208,1.38l1.694,-0.182c3.291,-0.354 6.097,-2.715 7.318,-6.157c0.303,-0.851 0.78,-1.714 1.061,-1.916c0.815,-0.586 1.942,-0.434 2.499,0.337c0.468,0.649 0.454,0.851 -0.179,2.574c-1.34,3.648 -3.457,5.995 -6.755,7.492c-1.589,0.721 -2.265,0.837 -5.455,0.941l-3.642,0.117l0.004,-2.458l0,0Zm36.933,1.598c-2.682,-0.997 -5.126,-3.186 -6.521,-5.842c-1.778,-3.386 -1.544,-5.297 0.619,-5.069c0.867,0.091 1.293,0.67 2.748,3.73c1.269,2.67 3.669,4.326 6.751,4.658l1.646,0.177l-0.215,-1.222c-0.328,-1.861 -1.797,-4.417 -3.352,-5.83c-1.571,-1.427 -4.45,-3.034 -5.443,-3.039c-1.901,-0.008 -2.864,-2.178 -1.362,-3.072c0.648,-0.386 0.925,-0.385 2.4,0.008c2.705,0.721 5.112,2.08 7.047,3.98c3.007,2.95 4.386,6.102 4.386,10.019l0,2.299l-3.318,-0.014c-2.811,-0.012 -3.633,-0.132 -5.386,-0.783l0,-0Zm-17.199,-9.277c-3.02,-1.389 -4.489,-4.535 -3.404,-7.294c0.284,-0.72 0.548,-1.433 0.588,-1.584c0.04,-0.151 -0.654,-0.594 -1.541,-0.986c-5.939,-2.619 -9.554,-7.875 -9.554,-13.888c-0,-6.44 3.97,-11.831 10.52,-14.282c2.916,-1.092 7.775,-1.351 10.742,-0.572c9.663,2.534 14.899,11.805 11.429,20.233c-0.714,1.734 -2.706,4.49 -4.127,5.71c-1.12,0.961 -4.589,3.03 -5.082,3.03c-0.842,-0 -1.078,0.623 -0.579,1.532c2.795,5.092 -3.399,10.672 -8.992,8.101Zm5.098,-3.611c1.01,-0.918 1.12,-1.162 0.949,-2.117c-0.276,-1.545 -1.514,-2.568 -3.108,-2.568c-3.106,-0 -4.336,3.729 -1.717,5.205c1.433,0.807 2.585,0.653 3.876,-0.52Zm3.327,-9.156c2.783,-1.166 5.112,-3.261 6.504,-5.848c1.041,-1.936 1.102,-2.219 1.102,-5.152c-0,-2.998 -0.042,-3.181 -1.224,-5.353c-1.966,-3.616 -5.299,-5.857 -9.946,-6.689c-4.694,-0.839 -10.146,1.404 -13.041,5.367c-3.43,4.696 -2.755,11.051 1.607,15.121c2.838,2.647 5.717,3.666 9.979,3.529c2.419,-0.077 3.271,-0.242 5.019,-0.975Zm-15.962,-9.155c-0.321,-0.063 -0.726,-0.452 -0.898,-0.865c-0.417,-0.995 0.375,-2.142 1.479,-2.142c1.298,0 3.807,-0.894 5.085,-1.812c1.454,-1.044 2.748,-3.376 3.043,-5.487c0.27,-1.927 1.145,-2.645 2.526,-2.073c1.12,0.464 1.33,1.348 0.852,3.577c-0.748,3.49 -3.417,6.581 -6.899,7.991c-1.654,0.67 -4.024,1.04 -5.188,0.811Zm18.63,-0.089c-2.151,-0.261 -4.254,-1.155 -5.908,-2.513c-1.383,-1.135 -1.599,-1.849 -0.784,-2.59c0.746,-0.677 1.975,-0.565 3.216,0.295c1.257,0.871 4.023,1.89 5.13,1.89c1.161,0 2.014,1.019 1.643,1.963c-0.386,0.981 -1.179,1.211 -3.297,0.955Z"
                    style={{
                      fillRule: "nonzero",
                      fill: "#fff",

                      strokeWidth: "1.7px",
                    }}
                  />
                </g>
                <circle
                  cx="430.774"
                  cy="5.72"
                  r="5.72"
                  style={{ fill: "var(--main-red)" }}
                />
                <circle
                  cx="458.397"
                  cy="5.72"
                  r="5.72"
                  style={{ fill: "var(--main-red)" }}
                />
                <g>
                  <path
                    d="M9.5,99.565l-9.5,-0l13.875,-88l32,70.375l32.625,-70.5l13,88.125l-9.5,-0l-7.875,-58l-28.375,61.5l-28,-61.5l-8.25,58Z"
                    style={{ fillRule: "nonzero", fill: "#fff" }}
                  />
                  <path
                    d="M196.625,99.565l-9.75,-23.5l-35.5,-0l-10,23.5l-10.25,-0l38.375,-87.375l37.375,87.375l-10.25,-0Zm-41.625,-32.25l28.25,-0l-14,-33.375l-14.25,33.375Z"
                    style={{ fillRule: "nonzero", fill: "#fff" }}
                  />
                  <path
                    d="M286.5,24.94l-20.25,-0l-0,74.625l-9.25,-0l0,-74.625l-20.25,-0l-0,-8.75l49.75,-0l0,8.75Z"
                    style={{ fillRule: "nonzero", fill: "#fff" }}
                  />
                  <path
                    d="M331.75,16.19l15.125,-0c9.5,-0 16.5,1.958 21,5.875c5.083,4.333 7.625,10.291 7.625,17.875c0,6.5 -2.187,12.021 -6.562,16.562c-4.375,4.542 -10.98,6.813 -19.813,6.813l-8.125,-0l0,36.25l-9.25,-0l0,-83.375Zm9.25,8.75l0,29.625l7.625,-0c5.5,-0 9.813,-1.334 12.938,-4c3.125,-2.667 4.687,-6.375 4.687,-11.125c0,-9.667 -6.125,-14.5 -18.375,-14.5l-6.875,-0Z"
                    style={{ fillRule: "nonzero", fill: "#fff" }}
                  />
                  <path
                    d="M514.5,99.565l0,-83.375l9.25,-0l0,74.625l33,-0l0,-74.625l9.25,-0l0,74.625l33,-0l0,-74.625l9.25,-0l0,83.375l-93.75,-0Z"
                    style={{ fillRule: "nonzero", fill: "#fff" }}
                  />
                  <path
                    d="M671.75,16.19l0,35.75l35.5,-35.75l12.5,-0l-39,38.875l40.25,44.5l-12.75,-0l-34.125,-38.25l-2.375,2.375l0,35.875l-9.25,-0l0,-83.375l9.25,-0Z"
                    style={{ fillRule: "nonzero", fill: "#fff" }}
                  />
                  <path
                    d="M822,99.565l-9.75,-23.5l-35.5,-0l-10,23.5l-10.25,-0l38.375,-87.375l37.375,87.375l-10.25,-0Zm-41.625,-32.25l28.25,-0l-14,-33.375l-14.25,33.375Z"
                    style={{ fillRule: "nonzero", fill: "#fff" }}
                  />
                </g>
              </g>
              <g>
                <path
                  d="M234.375,157.81l0,-17.292l3,-0l0,14.542l7.75,-0l0,-14.542l3,-0l0,14.542l2.833,-0l0,7.333l-2.75,-0l0,-4.583l-13.833,-0Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
                <path
                  d="M260.375,140.518l6.542,-0c1.583,-0 2.791,0.333 3.625,1c1,0.806 1.5,1.889 1.5,3.25c-0,1.5 -0.625,2.653 -1.875,3.458c0.861,0.223 1.583,0.611 2.166,1.167c0.917,0.889 1.375,2 1.375,3.333c0,1.667 -0.597,2.973 -1.791,3.917c-1.028,0.778 -2.389,1.167 -4.084,1.167l-7.458,-0l0,-17.292Zm3,7.042l3.167,-0c0.805,-0 1.444,-0.167 1.916,-0.5c0.556,-0.417 0.834,-1.014 0.834,-1.792c-0,-0.694 -0.278,-1.25 -0.834,-1.667c-0.416,-0.277 -1.222,-0.416 -2.416,-0.416l-2.667,-0l0,4.375Zm0,7.583l3.708,-0c1.278,-0 2.181,-0.194 2.709,-0.583c0.666,-0.5 1,-1.139 1,-1.917c-0,-0.833 -0.292,-1.486 -0.875,-1.958c-0.528,-0.417 -1.431,-0.625 -2.709,-0.625l-3.833,-0l0,5.083Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
                <path
                  d="M297.375,152.018l2.5,1.375c-0.583,1.111 -1.292,2.042 -2.125,2.792c-1.583,1.416 -3.5,2.125 -5.75,2.125c-2.333,-0 -4.34,-0.757 -6.021,-2.271c-1.68,-1.514 -2.521,-3.771 -2.521,-6.771c0,-2.639 0.757,-4.826 2.271,-6.563c1.514,-1.736 3.549,-2.604 6.104,-2.604c2.889,0 5.07,1.056 6.542,3.167c1.167,1.667 1.708,3.833 1.625,6.5l-13.458,-0c0.027,1.75 0.569,3.167 1.625,4.25c1.055,1.083 2.347,1.625 3.875,1.625c1.361,-0 2.541,-0.417 3.541,-1.25c0.778,-0.667 1.375,-1.458 1.792,-2.375Zm-10.625,-4.75l10.167,-0c-0.25,-1.361 -0.841,-2.451 -1.771,-3.271c-0.931,-0.819 -2.035,-1.229 -3.313,-1.229c-1.25,-0 -2.354,0.424 -3.312,1.271c-0.958,0.847 -1.549,1.923 -1.771,3.229Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
                <path
                  d="M322.167,143.268l-5.417,-0l0,14.542l-3,-0l0,-14.542l-5.417,-0l0,-2.75l13.834,-0l-0,2.75Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
                <path
                  d="M346.208,155.726c-1.722,1.723 -3.902,2.584 -6.541,2.584c-2.639,-0 -4.827,-0.861 -6.563,-2.584c-1.736,-1.722 -2.604,-3.889 -2.604,-6.5c0,-2.639 0.868,-4.819 2.604,-6.541c1.736,-1.723 3.924,-2.584 6.563,-2.584c2.639,0 4.826,0.861 6.562,2.584c1.736,1.722 2.604,3.902 2.604,6.541c0,2.611 -0.875,4.778 -2.625,6.5Zm-2.25,-11.25c-1.166,-1.139 -2.597,-1.708 -4.291,-1.708c-1.695,-0 -3.132,0.576 -4.313,1.729c-1.18,1.153 -1.771,2.729 -1.771,4.729c0,2 0.598,3.57 1.792,4.709c1.194,1.139 2.625,1.708 4.292,1.708c1.666,-0 3.097,-0.569 4.291,-1.708c1.195,-1.139 1.792,-2.709 1.792,-4.709c0,-2.027 -0.597,-3.611 -1.792,-4.75Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
                <path
                  d="M368.917,157.81l-0,-6.792c-1.639,0.25 -3,0.375 -4.084,0.375c-1.889,-0 -3.291,-0.417 -4.208,-1.25c-0.972,-0.861 -1.458,-2.278 -1.458,-4.25l-0,-5.375l3,-0l-0,4.958c-0,0.945 0.125,1.625 0.375,2.042c0.389,0.75 1.264,1.125 2.625,1.125c1.222,-0 2.472,-0.125 3.75,-0.375l-0,-7.75l3,-0l-0,17.292l-3,-0Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
                <path
                  d="M383.833,157.81l0,-17.292l3,-0l0,7.083l8.167,0l0,-7.083l3,-0l0,17.292l-3,-0l0,-7.459l-8.167,0l0,7.459l-3,-0Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
                <path
                  d="M409.917,157.81l-0,-17.292l3,-0l-0,6.625l3.083,-0c2.389,-0 4.139,0.569 5.25,1.708c0.889,0.889 1.333,2.098 1.333,3.625c0,1.611 -0.514,2.903 -1.541,3.875c-1.028,0.973 -2.723,1.459 -5.084,1.459l-6.041,-0Zm3,-2.667l2.791,-0c1.25,-0 2.139,-0.153 2.667,-0.458c0.75,-0.5 1.125,-1.236 1.125,-2.209c0,-1 -0.361,-1.722 -1.083,-2.166c-0.5,-0.334 -1.389,-0.5 -2.667,-0.5l-2.833,-0l-0,5.333Zm11.75,2.667l-0,-17.292l3,-0l-0,17.292l-3,-0Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
                <path
                  d="M439.583,140.518l3,-0l0,11.417l11.834,-12.75l-0,18.625l-3,-0l-0,-11.542l-11.834,12.75l0,-18.5Zm1.5,-7.458l2.5,-0.959c0.5,1.667 1.681,2.5 3.542,2.5c1.861,0 3.042,-0.833 3.542,-2.5l2.5,0.959c-0.445,1.25 -1.202,2.236 -2.271,2.958c-1.07,0.722 -2.327,1.083 -3.771,1.083c-1.444,0 -2.701,-0.361 -3.771,-1.083c-1.069,-0.722 -1.826,-1.708 -2.271,-2.958Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
                <path
                  d="M495.625,128.643l3.333,-0c-0.305,1.028 -0.826,1.896 -1.562,2.604c-0.736,0.708 -1.403,1.188 -2,1.438c-0.597,0.25 -1.299,0.472 -2.104,0.666c-0.139,0.028 -0.473,0.104 -1,0.229c-0.528,0.125 -0.931,0.23 -1.209,0.313c-0.277,0.083 -0.639,0.194 -1.083,0.333c-0.444,0.139 -0.847,0.306 -1.208,0.5c-0.361,0.195 -0.695,0.403 -1,0.625c-1.056,0.806 -1.91,1.924 -2.563,3.354c-0.653,1.431 -1.007,2.952 -1.062,4.563l0.083,-0c1.25,-2.111 3.347,-3.167 6.292,-3.167c2.583,0 4.729,0.875 6.437,2.625c1.709,1.75 2.563,3.917 2.563,6.5c-0,2.611 -0.875,4.778 -2.625,6.5c-1.75,1.723 -4.028,2.584 -6.834,2.584c-2.416,-0 -4.402,-0.723 -5.958,-2.167c-1.944,-1.778 -2.917,-4.75 -2.917,-8.917c0,-7.25 1.639,-12 4.917,-14.25c0.25,-0.166 0.514,-0.326 0.792,-0.479c0.277,-0.153 0.576,-0.292 0.896,-0.417c0.319,-0.125 0.59,-0.236 0.812,-0.333c0.222,-0.097 0.535,-0.194 0.938,-0.292c0.402,-0.097 0.68,-0.166 0.833,-0.208c0.153,-0.042 0.458,-0.111 0.917,-0.208c0.458,-0.097 0.743,-0.16 0.854,-0.188c1.111,-0.25 1.916,-0.548 2.416,-0.896c0.5,-0.347 0.848,-0.784 1.042,-1.312Zm-0.958,15.833c-1.167,-1.139 -2.598,-1.708 -4.292,-1.708c-1.694,-0 -3.132,0.576 -4.312,1.729c-1.181,1.153 -1.771,2.729 -1.771,4.729c-0,2 0.597,3.57 1.791,4.709c1.195,1.139 2.625,1.708 4.292,1.708c1.667,-0 3.097,-0.569 4.292,-1.708c1.194,-1.139 1.791,-2.709 1.791,-4.709c0,-2.027 -0.597,-3.611 -1.791,-4.75Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
                <path
                  d="M510.333,167.393l5.5,-11.208l-7.958,-15.667l3.417,-0l6.125,12.375l5.625,-12.375l3.333,-0l-12.708,26.875l-3.334,-0Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
                <path
                  d="M547.125,143.268l-5.417,-0l0,14.542l-3,-0l0,-14.542l-5.416,-0l-0,-2.75l13.833,-0l0,2.75Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
                <path
                  d="M556.542,140.518l3,-0l-0,11.417l11.833,-12.75l0,18.625l-3,-0l0,-11.542l-11.833,12.75l-0,-18.5Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
                <path
                  d="M583.292,140.518l3,-0l-0,7.083l7,-7.083l3.666,-0l-7.5,7.708l8.417,9.584l-3.917,-0l-6.75,-7.584l-0.916,0.875l-0,6.709l-3,-0l-0,-17.292Z"
                  style={{ fillRule: "nonzero", fill: "#fff" }}
                />
              </g>
            </svg>
          </div>{" "}
          {/* <nav className={styles.nav_social}>
            <ul className={styles.nav_social__list}>
              <li>
                <a
                  href="#"
                  onClick={() =>
                    !window.open("http://instagram.com/_u/yulianalegkodumova/")
                  }
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() =>
                    !window.open("tg://resolve?domain=YulianaLegkodumova")
                  }
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => !window.open("https://vk.com/matreshkaflower")}
                >
                  В контакте
                </a>
              </li>
            </ul>
          </nav> */}
          <div className={`${styles.rating}`}>
            {state && (
              <>
                <iframe
                  title="Рейтинг Яндекс"
                  src="https://yandex.ru/sprav/widget/rating-badge/194072879661?type=rating"
                  width="150"
                  height="50"
                  frameBorder="0"
                ></iframe>
              </>
            )}
            {/* <small>
              <time style={{ color: "var(--mainGray)" }}>
                {(() => {
                  const date = new Date();
                  return new Intl.DateTimeFormat("ru-RU", {
                    dateStyle: "full",
                    timeStyle: "short",
                    timeZone: "Europe/Moscow",
                  }).format(date);
                })()}
              </time>
            </small> */}
          </div>
          <small className={styles.small}>
            *Meta - признана судом России экстремистской организацией
          </small>
          <div className={styles.nav}>
            <Nav
              extStyles={{
                color: "var(--main-light)",
              }}
            />
          </div>
          <div className={styles.creds}>
            <p>ООО Л-ДИНАМИКА, ИНН 390623085</p>
            <address className={styles.address}>
              <p>Калининград, улица Виктора Гакуна, 5Б</p>
              <a href="tel:+79114939999">+7 911 493-99-99</a>
              <a href="mailto:matreshkaflower@bk.ru">matreshkaflower@bk.ru</a>
            </address>
          </div>
        </div>
      </footer>
    </>
  );
}
