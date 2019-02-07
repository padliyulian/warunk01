CKEDITOR.replace("wj-content-message");

initMap = () => {
  const mapView = document.querySelector('#map')
  const mapLocation = {
    lat: -5.323846,
    lng: 105.201872
  }
  const options = {
    zoom: 17,
    center: mapLocation
  }

  const map = new google.maps.Map(mapView, options)

  const infoWindow = new google.maps.InfoWindow({
    content: '<h3>warunk #jaman@now</h3>'
  })

  const marker = new google.maps.Marker({
    position: mapLocation,
    map: map
  })

  marker.addListener('click', () => infoWindow.open(map, marker))
}

function onloadAnimate() {
  document.querySelector('.navbar').classList.add('animated', 'fadeInDown');

  document.querySelectorAll('.wj-gallery-box').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('wj-show-el');
    }, (700 * (Math.exp(i * 0.30))) - 700);
  });
}

onloadAnimate();

document.querySelectorAll('.nav-link:not(.wj-btn-login)').forEach(el => {
  el.addEventListener('click', (ev) => {
    let href = ev.target.getAttribute('href');
    let section = document.querySelector(href);
    if (href !== '#home') {
      document.querySelector(href).classList.add('animated', 'bounce')
      setTimeout(function () {
        document.querySelector(href).classList.remove('animated', 'bounce')
      }, 1000);
    }
    document.querySelector('html').scrollTop = section.offsetTop - 90;
    ev.preventDefault();
    document.querySelector('.navbar-collapse').classList.remove('show');
  });
});

document.querySelector('.wj-btn-login').addEventListener('click', (ev) => {
  ev.preventDefault();
  document.querySelector('.navbar-collapse').classList.remove('show');
});

document.querySelector('.wj-top-btn').addEventListener('click', () => {
  document.querySelector('html').scrollTop = 0;
});

document.querySelector('.wj-top-btn').addEventListener('mouseover', () => {
  document.querySelector('.wj-top-btn').classList.add('animated', 'bounce');
  setTimeout(function () {
    document.querySelector('.wj-top-btn').classList.remove('animated', 'bounce')
  }, 1000);
});

document.querySelectorAll('.wj-btn-sosmed').forEach(el => {
  el.addEventListener('mouseover', (ev) => {
    ev.target.classList.add('animated', 'rubberBand');
    setTimeout(() => {
      ev.target.classList.remove('animated', 'rubberBand');
    }, 1000);
  });
});

let mar = 0;
if (window.innerWidth < 768) {
  document.querySelectorAll('.wj-show').forEach((el) => {
    el.style.display = 'none';
  });

  document.querySelectorAll('.wj-arrow').forEach(el => {
    el.addEventListener('click', (ev) => {
      if (ev.target.parentElement.classList.contains('wj-arrow-left')) {
        if (mar !== -900) {
          document.querySelector('.wj-arrow-right').style.display = 'block';
          document.querySelector('.wj-wrap').style.marginLeft = `${mar -= 100}%`;
        } else {
          document.querySelector('.wj-arrow-left').style.display = 'none';
        }
      } else {
        if (mar !== 0) {
          document.querySelector('.wj-arrow-left').style.display = 'block';
          document.querySelector('.wj-wrap').style.marginLeft = `${mar += 100}%`;
        } else {
          document.querySelector('.wj-arrow-right').style.display = 'none';
        }
      }
    });
  });

  window.onscroll = function () {
    // console.log(document.querySelector('html').scrollTop);
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector(".navbar").classList.remove("wj-navbar");
    } else {
      document.querySelector(".navbar").classList.add("wj-navbar");
    }

    if (document.querySelector('html').scrollTop > 1800) {
      document.querySelector('.wj-top-btn').style.display = 'block';
    } else {
      document.querySelector('.wj-top-btn').style.display = 'none';
    }
  };
} else {
  document.querySelectorAll('.wj-show').forEach((el) => {
    el.style.display = 'block';
  });

  document.querySelectorAll('.wj-arrow').forEach(el => {
    el.addEventListener('click', (ev) => {
      if (ev.target.parentElement.classList.contains('wj-arrow-left')) {
        if (mar !== -100) {
          document.querySelector('.wj-arrow-right').style.display = 'block';
          document.querySelector('.wj-wrap').style.marginLeft = `${mar -= 20}%`;
        } else {
          document.querySelector('.wj-arrow-left').style.display = 'none';
        }
      } else {
        if (mar !== 0) {
          document.querySelector('.wj-arrow-left').style.display = 'block';
          document.querySelector('.wj-wrap').style.marginLeft = `${mar += 20}%`;
        } else {
          document.querySelector('.wj-arrow-right').style.display = 'none';
        }
      }
    });
  });

  window.onscroll = function () {
    // console.log(document.querySelector('html').scrollTop);
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector(".navbar").classList.remove("wj-navbar");
    } else {
      document.querySelector(".navbar").classList.add("wj-navbar");
    }

    if (document.querySelector('html').scrollTop > 1800) {
      document.querySelector('.wj-top-btn').style.display = 'block';
    } else {
      document.querySelector('.wj-top-btn').style.display = 'none';
    }
  };
}