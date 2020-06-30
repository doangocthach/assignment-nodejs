// const product = require("../../models/product");

const editProductForm = (product) => {
  const div = document.getElementById("modal-wrapper");
  div.style.display = "flex";
  let temp = "";
  product.detail.forEach((detail) => {
    temp +=
      '<div class="detail-wrapper1"> ' +
      ' <div class="form-group"><label class="text-uppercase" for="size">Size</label><input value=' +
      detail.size +
      ' class="form-control" type="text" placeholder="Size" name="size"></div> ' +
      '<div class="form-group"><label class="text-uppercase" for="color">Color</label><input value=' +
      detail.color +
      '  class="form-control" type="text" placeholder="Color" name="color" multiple=""></div>  ' +
      '<div class="form-group"><label class="text-uppercase" for="quantity">Quantity</label><input value=' +
      detail.quantity +
      ' class="form-control" type="number" placeholder="Quantity" name="quantity" multiple=""></div> ' +
      "</div> ";
  });
  div.innerHTML =
    '<div class="col-md-4 login-sec"><h2 class="text-center">Edit Product</h2><form class="login-form" method="POST" id="add-product-form" action="updateProduct" enctype="multipart/form-data"><div class="form-group">' +
    '<input name="id" class="hidden-input" value=' +
    product._id +
    " />" +
    '<label class="text-uppercase" for="product_name">Product Name</label><input class="form-control" type="text" placeholder="" name="product_name" value="' +
    product.product_name +
    '"></div><div class="form-group"><label class="text-uppercase" for="price">Price</label><input class="form-control" type="number" value=' +
    product.price +
    ' placeholder="" name="price"></div><div class="form-group"><label class="text-uppercase" for="description">Description</label><textarea class="form-control"  type="number" placeholder="" name="description">' +
    product.description +
    '</textarea></div><div class="form-group"><label class="text-uppercase" for="category">Category</label><textarea class="form-control" ' +
    ' type="text" placeholder="" name="category">' +
    product.category +
    "</textarea></div> " +
    ' <div class="form-group"><label class="text-uppercase" for="image">Images</label><input class="form-control" value=' +
    product.image +
    ' type="file" placeholder="" name="image" multiple=""></div> ' +
    temp +
    ' <button id="btn-add-detail1" type="button">Add Detaii</button><div class="form-check"><label class="form-check-label"></label><button class="btn btn-login float-right" type="submit" id="btn-submit">Submit</button></div></form></div>';
  $("#btn-add-detail1").click(function () {
    // console.log("vclll");
    $(".detail-wrapper1")
      .last()
      .after(
        `<div class="detail-wrapper"><div class="form-group"><label class="text-uppercase" for="size">Size</label><input class="form-control" type="text" placeholder="Size" name="size"></div><div class="form-group"><label class="text-uppercase" for="color">Color</label><input class="form-control" type="text" placeholder="Color" name="color" multiple=""></div><div class="form-group"><label class="text-uppercase" for="quantity">Quantity</label><input class="form-control" type="number" placeholder="Quantity" name="quantity" multiple=""></div></div>`
      );
  });
};
!(function (t) {
  "use strict";
  function e(t) {
    return null !== t && t === t.window;
  }
  function n(t) {
    return e(t) ? t : 9 === t.nodeType && t.defaultView;
  }
  function a(t) {
    var e,
      a,
      i = { top: 0, left: 0 },
      o = t && t.ownerDocument;
    return (
      (e = o.documentElement),
      "undefined" != typeof t.getBoundingClientRect &&
        (i = t.getBoundingClientRect()),
      (a = n(o)),
      {
        top: i.top + a.pageYOffset - e.clientTop,
        left: i.left + a.pageXOffset - e.clientLeft,
      }
    );
  }
  function i(t) {
    var e = "";
    for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
    return e;
  }
  function o(t) {
    if (d.allowEvent(t) === !1) return null;
    for (
      var e = null, n = t.target || t.srcElement;
      null !== n.parentElement;

    ) {
      if (
        !(n instanceof SVGElement || -1 === n.className.indexOf("waves-effect"))
      ) {
        e = n;
        break;
      }
      if (n.classList.contains("waves-effect")) {
        e = n;
        break;
      }
      n = n.parentElement;
    }
    return e;
  }
  function r(e) {
    var n = o(e);
    null !== n &&
      (c.show(e, n),
      "ontouchstart" in t &&
        (n.addEventListener("touchend", c.hide, !1),
        n.addEventListener("touchcancel", c.hide, !1)),
      n.addEventListener("mouseup", c.hide, !1),
      n.addEventListener("mouseleave", c.hide, !1));
  }
  var s = s || {},
    u = document.querySelectorAll.bind(document),
    c = {
      duration: 750,
      show: function (t, e) {
        if (2 === t.button) return !1;
        var n = e || this,
          o = document.createElement("div");
        (o.className = "waves-ripple"), n.appendChild(o);
        var r = a(n),
          s = t.pageY - r.top,
          u = t.pageX - r.left,
          d = "scale(" + (n.clientWidth / 100) * 10 + ")";
        "touches" in t &&
          ((s = t.touches[0].pageY - r.top), (u = t.touches[0].pageX - r.left)),
          o.setAttribute("data-hold", Date.now()),
          o.setAttribute("data-scale", d),
          o.setAttribute("data-x", u),
          o.setAttribute("data-y", s);
        var l = { top: s + "px", left: u + "px" };
        (o.className = o.className + " waves-notransition"),
          o.setAttribute("style", i(l)),
          (o.className = o.className.replace("waves-notransition", "")),
          (l["-webkit-transform"] = d),
          (l["-moz-transform"] = d),
          (l["-ms-transform"] = d),
          (l["-o-transform"] = d),
          (l.transform = d),
          (l.opacity = "1"),
          (l["-webkit-transition-duration"] = c.duration + "ms"),
          (l["-moz-transition-duration"] = c.duration + "ms"),
          (l["-o-transition-duration"] = c.duration + "ms"),
          (l["transition-duration"] = c.duration + "ms"),
          (l["-webkit-transition-timing-function"] =
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
          (l["-moz-transition-timing-function"] =
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
          (l["-o-transition-timing-function"] =
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
          (l["transition-timing-function"] =
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
          o.setAttribute("style", i(l));
      },
      hide: function (t) {
        d.touchup(t);
        var e = this,
          n = (1.4 * e.clientWidth, null),
          a = e.getElementsByClassName("waves-ripple");
        if (!(a.length > 0)) return !1;
        n = a[a.length - 1];
        var o = n.getAttribute("data-x"),
          r = n.getAttribute("data-y"),
          s = n.getAttribute("data-scale"),
          u = Date.now() - Number(n.getAttribute("data-hold")),
          l = 350 - u;
        0 > l && (l = 0),
          setTimeout(function () {
            var t = {
              top: r + "px",
              left: o + "px",
              opacity: "0",
              "-webkit-transition-duration": c.duration + "ms",
              "-moz-transition-duration": c.duration + "ms",
              "-o-transition-duration": c.duration + "ms",
              "transition-duration": c.duration + "ms",
              "-webkit-transform": s,
              "-moz-transform": s,
              "-ms-transform": s,
              "-o-transform": s,
              transform: s,
            };
            n.setAttribute("style", i(t)),
              setTimeout(function () {
                try {
                  e.removeChild(n);
                } catch (t) {
                  return !1;
                }
              }, c.duration);
          }, l);
      },
      wrapInput: function (t) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          if ("input" === n.tagName.toLowerCase()) {
            var a = n.parentNode;
            if (
              "i" === a.tagName.toLowerCase() &&
              -1 !== a.className.indexOf("waves-effect")
            )
              continue;
            var i = document.createElement("i");
            i.className = n.className + " waves-input-wrapper";
            var o = n.getAttribute("style");
            o || (o = ""),
              i.setAttribute("style", o),
              (n.className = "waves-button-input"),
              n.removeAttribute("style"),
              a.replaceChild(i, n),
              i.appendChild(n);
          }
        }
      },
    },
    d = {
      touches: 0,
      allowEvent: function (t) {
        var e = !0;
        return (
          "touchstart" === t.type
            ? (d.touches += 1)
            : "touchend" === t.type || "touchcancel" === t.type
            ? setTimeout(function () {
                d.touches > 0 && (d.touches -= 1);
              }, 500)
            : "mousedown" === t.type && d.touches > 0 && (e = !1),
          e
        );
      },
      touchup: function (t) {
        d.allowEvent(t);
      },
    };
  (s.displayEffect = function (e) {
    (e = e || {}),
      "duration" in e && (c.duration = e.duration),
      c.wrapInput(u(".waves-effect")),
      "ontouchstart" in t &&
        document.body.addEventListener("touchstart", r, !1),
      document.body.addEventListener("mousedown", r, !1);
  }),
    (s.attach = function (e) {
      "input" === e.tagName.toLowerCase() &&
        (c.wrapInput([e]), (e = e.parentElement)),
        "ontouchstart" in t && e.addEventListener("touchstart", r, !1),
        e.addEventListener("mousedown", r, !1);
    }),
    (t.Waves = s),
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        s.displayEffect();
      },
      !1
    );
  $("#btn-add-detail").click(function () {
    $(".detail-wrapper")
      .last()
      .after(
        `<div class="detail-wrapper"><div class="form-group"><label class="text-uppercase" for="size">Size</label><input class="form-control" type="text" placeholder="Size" name="size"></div><div class="form-group"><label class="text-uppercase" for="color">Color</label><input class="form-control" type="text" placeholder="Color" name="color" multiple=""></div><div class="form-group"><label class="text-uppercase" for="quantity">Quantity</label><input class="form-control" type="number" placeholder="Quantity" name="quantity" multiple=""></div></div>`
      );
  });
})(window);
