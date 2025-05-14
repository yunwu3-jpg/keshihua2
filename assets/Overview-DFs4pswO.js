import { _ as W, g as $, a as C } from "./EnergyChart-C3m8Wnvh.js";
import {
  u as S,
  c as v,
  d as B,
  r as g,
  a as w,
  o as _,
  w as s,
  b as a,
  e as f,
  F as k,
  f as D,
  t as o,
  g as n,
  h as F,
  n as N,
  i as O,
  j as E,
  k as I,
} from "./index-Bcwslg9v.js";
const T = { class: "card-header" },
  z = { class: "building-name" },
  V = { class: "card-content" },
  j = { class: "stat-label" },
  A = { class: "stat-value" },
  H = {
    __name: "BuildingCard",
    props: {
      building: {
        type: Object,
        required: !0,
        validator: (u) =>
          [
            "id",
            "name",
            "location",
            "area",
            "floors",
            "avgElectricity",
            "avgWater",
          ].every((l) => l in u),
      },
      lazy: { type: Boolean, default: !1 },
    },
    setup(u) {
      const l = u,
        p = S(),
        r = v(
          () =>
            ({ 东区: "success", 西区: "warning", 南区: "danger", 北区: "info" }[
              l.building.location
            ] || "")
        ),
        m = v(() => [
          { label: "建筑面积", value: `${l.building.area} ㎡` },
          { label: "楼层数", value: `${l.building.floors} 层` },
          {
            label: "日均用电",
            value: `${l.building.avgElectricity.toFixed(1)} kWh`,
          },
          { label: "日均用水", value: `${l.building.avgWater.toFixed(1)} 吨` },
        ]),
        y = v(() => ({
          "--hover-transform": "translateY(-5px)",
          "--transition-duration": "0.2s",
        })),
        b = B(
          () => {
            p.push({
              name: "Detail",
              params: { id: l.building.id },
              state: { fromCard: !0 },
            });
          },
          150,
          { leading: !0, trailing: !1 }
        );
      return (e, t) => {
        const i = g("el-tag"),
          c = g("el-card");
        return (
          _(),
          w(
            c,
            {
              shadow: "hover",
              class: "building-card",
              onClick: O(b),
              style: N(y.value),
            },
            {
              header: s(() => [
                a("div", T, [
                  a("span", z, o(u.building.name), 1),
                  n(
                    i,
                    { type: r.value, size: "small", effect: "plain" },
                    { default: s(() => [F(o(u.building.location), 1)]), _: 1 },
                    8,
                    ["type"]
                  ),
                ]),
              ]),
              default: s(() => [
                a("div", V, [
                  (_(!0),
                  f(
                    k,
                    null,
                    D(
                      m.value,
                      (d) => (
                        _(),
                        f("div", { key: d.label, class: "stat-item" }, [
                          a("span", j, o(d.label), 1),
                          a("strong", A, o(d.value), 1),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              _: 1,
            },
            8,
            ["onClick", "style"]
          )
        );
      };
    },
  },
  J = W(H, [["__scopeId", "data-v-f8ae3d81"]]),
  L = { class: "overview-container" },
  Y = { class: "stats-grid" },
  q = { class: "stat-card" },
  K = { class: "stat-value" },
  M = { class: "stat-card" },
  P = { class: "stat-value" },
  R = { class: "stat-card" },
  G = { class: "stat-value" },
  Q = { class: "stat-card" },
  U = { class: "stat-value" },
  X = { class: "stat-card" },
  Z = { class: "stat-value" },
  x = "summaryDataCache",
  tt = 30 * 60 * 1e3,
  at = {
    __name: "Overview",
    setup(u) {
      const l = E([]),
        p = E(!0),
        r = v(() => {
          const e = {
            totalElectricity: 0,
            totalWater: 0,
            buildingCount: 0,
            avgElectricity: 0,
            avgWater: 0,
          };
          return (
            l.value.length &&
              ((e.buildingCount = l.value.length),
              (e.totalElectricity = l.value.reduce(
                (t, i) => t + i.totalElectricity,
                0
              )),
              (e.totalWater = l.value.reduce((t, i) => t + i.totalWater, 0)),
              (e.avgElectricity = e.totalElectricity / e.buildingCount),
              (e.avgWater = e.totalWater / e.buildingCount)),
            e
          );
        }),
        m = (e) =>
          l.value.length
            ? l.value.map((t) => ({ name: t.name, value: t[e] }))
            : [],
        y = v(() => m("totalElectricity")),
        b = v(() => m("totalWater"));
      return (
        I(async () => {
          try {
            p.value = !0;
            const e = localStorage.getItem(x),
              t = e ? JSON.parse(e) : null;
            if (t && Date.now() - t.timestamp < tt) l.value = t.data;
            else {
              const i = await $();
              (l.value = i),
                localStorage.setItem(
                  x,
                  JSON.stringify({ data: i, timestamp: Date.now() })
                );
            }
          } catch (e) {
            console.error("数据加载失败:", e);
          } finally {
            p.value = !1;
          }
        }),
        (e, t) => {
          const i = g("el-card"),
            c = g("el-col"),
            d = g("el-row");
          return (
            _(),
            f("div", L, [
              t[8] || (t[8] = a("h1", null, "教学楼能耗总览", -1)),
              n(
                d,
                { gutter: 20 },
                {
                  default: s(() => [
                    n(
                      c,
                      { span: 12 },
                      {
                        default: s(() => [
                          n(i, null, {
                            header: s(
                              () =>
                                t[0] ||
                                (t[0] = [
                                  a("span", null, "各教学楼用电量占比", -1),
                                ])
                            ),
                            default: s(() => [
                              n(
                                C,
                                {
                                  type: "pie",
                                  title: "用电量占比",
                                  data: y.value,
                                  height: "350px",
                                },
                                null,
                                8,
                                ["data"]
                              ),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      }
                    ),
                    n(
                      c,
                      { span: 12 },
                      {
                        default: s(() => [
                          n(i, null, {
                            header: s(
                              () =>
                                t[1] ||
                                (t[1] = [
                                  a("span", null, "各教学楼用水量占比", -1),
                                ])
                            ),
                            default: s(() => [
                              n(
                                C,
                                {
                                  type: "pie",
                                  title: "用水量占比",
                                  data: b.value,
                                  height: "350px",
                                },
                                null,
                                8,
                                ["data"]
                              ),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
              n(
                d,
                { gutter: 20, class: "mt-20" },
                {
                  default: s(() => [
                    n(
                      c,
                      { span: 24 },
                      {
                        default: s(() => [
                          n(i, null, {
                            header: s(
                              () =>
                                t[2] ||
                                (t[2] = [a("span", null, "能耗统计", -1)])
                            ),
                            default: s(() => [
                              a("div", Y, [
                                a("div", q, [
                                  t[3] ||
                                    (t[3] = a(
                                      "div",
                                      { class: "stat-title" },
                                      "总用电量",
                                      -1
                                    )),
                                  a(
                                    "div",
                                    K,
                                    o(r.value.totalElectricity) + " kWh",
                                    1
                                  ),
                                ]),
                                a("div", M, [
                                  t[4] ||
                                    (t[4] = a(
                                      "div",
                                      { class: "stat-title" },
                                      "总用水量",
                                      -1
                                    )),
                                  a("div", P, o(r.value.totalWater) + " 吨", 1),
                                ]),
                                a("div", R, [
                                  t[5] ||
                                    (t[5] = a(
                                      "div",
                                      { class: "stat-title" },
                                      "教学楼数量",
                                      -1
                                    )),
                                  a(
                                    "div",
                                    G,
                                    o(r.value.buildingCount) + " 栋",
                                    1
                                  ),
                                ]),
                                a("div", Q, [
                                  t[6] ||
                                    (t[6] = a(
                                      "div",
                                      { class: "stat-title" },
                                      "平均用电",
                                      -1
                                    )),
                                  a(
                                    "div",
                                    U,
                                    o(r.value.avgElectricity.toFixed(1)) +
                                      " kWh/栋 ",
                                    1
                                  ),
                                ]),
                                a("div", X, [
                                  t[7] ||
                                    (t[7] = a(
                                      "div",
                                      { class: "stat-title" },
                                      "平均用水",
                                      -1
                                    )),
                                  a(
                                    "div",
                                    Z,
                                    o(r.value.avgWater.toFixed(1)) + " 吨/栋 ",
                                    1
                                  ),
                                ]),
                              ]),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
              t[9] || (t[9] = a("h2", null, "各教学楼能耗详情", -1)),
              n(
                d,
                { gutter: 20 },
                {
                  default: s(() => [
                    (_(!0),
                    f(
                      k,
                      null,
                      D(
                        l.value,
                        (h) => (
                          _(),
                          w(
                            c,
                            { key: h.id, xs: 24, sm: 12, md: 8 },
                            {
                              default: s(() => [
                                n(J, { building: h }, null, 8, ["building"]),
                              ]),
                              _: 2,
                            },
                            1024
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
      );
    },
  },
  st = W(at, [["__scopeId", "data-v-edec83ff"]]);
export { st as default };
