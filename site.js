
/* ==================================================================
   RETAILER LINKS: paste each live listing URL between the quotes.
   Leave a link empty and the site shows "listing opening soon".
   STORE_LINKS = your brand store or seller page on each retailer.
   ================================================================== */
const STORE_LINKS = {
  us: { amazon: "", walmart: "", bestbuy: "" },
  ca: { amazon: "", walmart: "", bestbuy: "" }
};
const PRODUCT_LINKS = {
  "zari-bloom": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "morpankh-round": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "jaal-leaf-lace": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "sheesh-mahal-rectangular": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "gulnar-bloom": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "kundan-blossom": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "chinar-leaf": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "mehtab-starburst": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "noor-lace": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "nishat-garden": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "morpankh-rectangular": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "sheesh-mahal-round": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "gulnar-bloom-runner": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "morpankh-runner": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "chinar-leaf-runner": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "chatai-weave-runner": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "pankha-leaf-runner": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  },
  "sheesh-mahal-runner": {
    "us": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    },
    "ca": {
      "amazon": "",
      "walmart": "",
      "bestbuy": ""
    }
  }
};
/* ================================================================== */

const RETAILERS = {
  us: [["amazon","Amazon","Amazon.com"],["walmart","Walmart","Walmart.com"],["bestbuy","Best Buy","BestBuy.com"]],
  ca: [["amazon","Amazon","Amazon.ca"],["walmart","Walmart","Walmart.ca"],["bestbuy","Best Buy","BestBuy.ca"]]
};
const COUNTRY = {us:"the United States", ca:"Canada"};
const TRADE_EMAIL = "support@northindiacompany.com";
let region = "us";
try { region = localStorage.getItem("nic-region") || ""; } catch(e) { region = ""; }
if (!["us","ca"].includes(region)) region = /-CA$/i.test(navigator.language || "") ? "ca" : "us";

function renderRegion(root){
  root = root || document;
  document.querySelectorAll(".region button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.region === region)));
  root.querySelectorAll("[data-buys]").forEach(box => {
    const id = box.dataset.buys; box.innerHTML = "";
    RETAILERS[region].forEach(([k,name,domain]) => {
      const url = ((PRODUCT_LINKS[id]||{})[region]||{})[k];
      if (url) { const a = document.createElement("a"); a.href = url; a.target = "_blank"; a.rel = "noopener";
        a.innerHTML = `<span>Buy on ${domain}</span><span aria-hidden="true">↗</span>`; box.appendChild(a); }
      else { const s = document.createElement("span"); s.innerHTML = `<span>${domain}</span><em>Listing opening soon</em>`; box.appendChild(s); }
    });
  });
  root.querySelectorAll("[data-country]").forEach(el => el.textContent = COUNTRY[region]);
  root.querySelectorAll("[data-stores]").forEach(ul => {
    ul.innerHTML = "";
    RETAILERS[region].forEach(([k,name,domain]) => {
      const url = STORE_LINKS[region][k]; const li = document.createElement("li");
      li.innerHTML = `<div><span class="r">${name}</span><span class="d">${domain}</span></div>` +
        (url ? `<a class="btn line" href="${url}" target="_blank" rel="noopener">Visit our ${name} store</a>` : `<span class="soon">Opening soon</span>`);
      ul.appendChild(li);
    });
  });
}
document.addEventListener("click", e => {
  const rb = e.target.closest(".region button");
  if (rb) { region = rb.dataset.region; try { localStorage.setItem("nic-region", region); } catch(_) {} renderRegion(); return; }
  const f = e.target.closest(".filters button");
  if (f) {
    const scope = f.closest("[data-filter-scope]") || document;
    scope.querySelectorAll(".filters button").forEach(x => x.setAttribute("aria-pressed", String(x === f)));
    const v = f.dataset.filter;
    scope.querySelectorAll(".card").forEach(c => c.hidden = !(v === "all" || c.dataset.shape === v));
    scope.querySelectorAll(".block").forEach(b => b.hidden = !b.querySelector(".card:not([hidden])"));
    return;
  }
  const t = e.target.closest(".thumbs button");
  if (t) { setImage(t.closest(".gallery"), +t.dataset.i); return; }
  const nb = e.target.closest(".stage .nav-btn");
  if (nb) { const g = nb.closest(".gallery"); const n = g.querySelectorAll(".thumbs button").length;
    setImage(g, (+g.dataset.i + (nb.classList.contains("next") ? 1 : -1) + n) % n); return; }
  if (e.target.closest("[data-open-menu]")) { document.getElementById("menu").showModal(); return; }
  if (e.target.closest("[data-close-menu]")) { document.getElementById("menu").close(); return; }
});
function setImage(g, i){
  const b = g.querySelectorAll(".thumbs button")[i]; if (!b) return;
  g.dataset.i = i;
  const main = g.querySelector(".stage img"); const ti = b.querySelector("img");
  main.src = ti.dataset.full || ti.src; main.alt = ti.dataset.alt || "";
  g.querySelectorAll(".thumbs button").forEach((x,j) => x.setAttribute("aria-current", String(i===j)));
  g.querySelector(".count").textContent = `${i+1} / ${g.querySelectorAll(".thumbs button").length}`;
}
document.addEventListener("keydown", e => {
  const g = document.querySelector(".gallery"); if (!g || !["ArrowLeft","ArrowRight"].includes(e.key)) return;
  if (!e.target.closest(".gallery")) return;
  const n = g.querySelectorAll(".thumbs button").length;
  setImage(g, (+g.dataset.i + (e.key === "ArrowRight" ? 1 : -1) + n) % n);
});
document.addEventListener("submit", e => {
  const f = e.target.closest("form[data-mailto]"); if (!f) return;
  e.preventDefault();
  const d = new FormData(f); const lines = [];
  f.querySelectorAll("[name]").forEach(el => {
    if (el.type === "checkbox") return;
    const label = f.querySelector(`label[for="${el.id}"]`); lines.push(`${label ? label.textContent : el.name}: ${d.get(el.name) || "-"}`);
  });
  const picks = d.getAll("interest"); if (picks.length) lines.splice(3, 0, `Interested in: ${picks.join(", ")}`);
  const subj = `${f.dataset.mailto}: ${d.get("company") || d.get("name") || ""}`.trim();
  location.href = `mailto:${TRADE_EMAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(lines.join("\n"))}`;
  const s = f.querySelector(".sent"); if (s) s.hidden = false;
});
