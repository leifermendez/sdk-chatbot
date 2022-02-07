/*
 * This is the sdk template introduced in javascript-sdk-design
 *
 * Template Init
 * ==============
 * This is a template that offer oop Object
 *
 * To find out more sdk template, please visit javascript-sdk-design homepage
 * https://github.com/hueitan/javascript-sdk-design/tree/master/Template
 */
import "./style.css";

(function (window) {
  var customer, lmBubble, lmBubbleCta, lmBubbleChatWrapper, lmBubbleIframe;

  var SDKlm = function (config) {
    customer = config;
    cookie.write('customer_saas',customer)
    console.log("Instanciando?", customer);
    SDKlm.prototype.builderBubble();
    SDKlm.prototype.loadListeners();
    return;
  };

  // your sdk init function
  SDKlm.prototype.builderBubble = function () {
    const checkExisteBubble = document.getElementById("lm-div-wrapper");
    /**
     * //TODO Comenzamos a crear la burbuja 😎
     */
    if (!checkExisteBubble) {
      const htmlRaw = [
        '<div class="lm animate__animated animate__fadeIn" id="lm-div-wrapper">',
        ' <div class="lm-chat lm-chat-close animate__animated animate__bounceInUp" id="lm-chat-wrapper">',
        '   <iframe class="lm-frame " src="" id="lm-iframe" frameborder="0"></iframe>',
        " </div>",
        ' <div class="lm-cta-open" id="lm-cta-bubble"></div>',
        ' <div class="lm-hi"><span>Hola! aqui estoy</span></div>',
        "</div>",
      ].join("");
      const htmlDivElement = document.createElement("div");
      htmlDivElement.innerHTML = htmlRaw;
      //TODO debes crear un div  nativo y retornarño
      document.body.appendChild(htmlDivElement);
      return;
    }

    console.log("Construir burbuja");
  };

  SDKlm.prototype.loadListeners = function () {
    /**
     * //TODO: Agarra todo los elementos
     */

    lmBubble = document.querySelector("#lm-div-wrapper");
    lmBubbleCta = document.querySelector("#lm-cta-bubble");
    lmBubbleChatWrapper = document.querySelector("#lm-chat-wrapper");
    lmBubbleIframe = document.querySelector("#lm-iframe");

    /** Listener click **/
    lmBubbleCta.addEventListener("click", checkIframeStatus);
  };

  /**
   * Private function
   */

  function checkIframeStatus() {
    const iframeState = lmBubbleChatWrapper.classList.contains("lm-chat-open");

    if(lmBubbleIframe.getAttribute('litener') !== 'true'){
      lmBubbleIframe.addEventListener("load", () => {
        lmBubbleIframe.setAttribute('litener','true');
        passEvents("connect_tenant", customer)
      })
    }

    if (!iframeState) {
      lmBubbleChatWrapper.classList.remove("lm-chat-close");
      lmBubbleChatWrapper.classList.add("lm-chat-open");
      lmBubble.classList.add("open");
      lmBubbleIframe.src = `${process.env.WIDGET}`;

      return;
    }

    if (iframeState) {
      lmBubbleChatWrapper.classList.remove("lm-chat-open");
      lmBubbleChatWrapper.classList.add("lm-chat-close");
      lmBubbleIframe.src = undefined;
      lmBubble.classList.remove("open");
      return;
    }
  }

  function passEvents(key, value) {
    var obj = {
      setItem: key,
      value: value,
    };
    lmBubbleIframe.contentWindow.postMessage(JSON.stringify(obj), "*");
  }

  var cookie = {
    write: function(name, value, days, domain, path) {
        var date = new Date();
        days = days || 730; // two years
        path = path || '/';
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = '; expires=' + date.toGMTString();
        var cookieValue = name + '=' + value + expires + '; path=' + path;
        if (domain) {
            cookieValue += '; domain=' + domain;
        }
        document.cookie = cookieValue;
    },
    read: function(name) {
        var allCookie = '' + document.cookie;
        var index = allCookie.indexOf(name);
        if (name === undefined || name === '' || index === -1) return '';
        var ind1 = allCookie.indexOf(';', index);
        if (ind1 == -1) ind1 = allCookie.length;
        return unescape(allCookie.substring(index + name.length + 1, ind1));
    },
    remove: function(name) {
        if (this.read(name)) {
            this.write(name, '', -1, '/');
        }
    }
};

  const config = window.SDKlm ? window.SDKlm.config : `${process.env.CUSTOMER}`

  new SDKlm(config);

})(window, undefined);
