import {
  l as b,
  j as v,
  c as g,
  k as B,
  m as M,
  p as V,
  e as W,
  g as n,
  w as l,
  r as d,
  u as N,
  o as R,
  b as e,
  t as o,
} from "./index-Bcwslg9v.js";
import { _ as C, b as E, c as F, a as I } from "./EnergyChart-C3m8Wnvh.js";
const S = { class: "detail-container" },
  $ = { class: "stat-list" },
  j = { class: "stat-item" },
  P = { class: "stat-item" },
  q = { class: "stat-item" },
  z = { class: "stat-item" },
  A = { class: "stat-list" },
  G = { class: "stat-item" },
  H = { class: "stat-item" },
  J = { class: "stat-item" },
  K = { class: "stat-item" },
  L = {
    __name: "Detail",
    setup(O) {
      const w = b(),
        h = N(),
        p = w.params.id.toString(),
        m = v(!0),
        i = v([]),
        _ = v([]),
        r = g(() => {
          const a = {
            electricity: { total: 0, avg: 0, max: 0, min: 0 },
            water: { total: 0, avg: 0, max: 0, min: 0 },
          };
          if (i.value.length) {
            const t = i.value.map((s) => s.electricity),
              c = i.value.map((s) => s.water);
            (a.electricity.total = t.reduce((s, u) => s + u, 0)),
              (a.electricity.avg = a.electricity.total / t.length),
              (a.electricity.max = Math.max(...t)),
              (a.electricity.min = Math.min(...t)),
              (a.water.total = c.reduce((s, u) => s + u, 0)),
              (a.water.avg = a.water.total / c.length),
              (a.water.max = Math.max(...c)),
              (a.water.min = Math.min(...c));
          }
          return a;
        }),
        f = g(() => {
          var a;
          return (
            ((a = _.value.find((t) => t.id === p)) == null ? void 0 : a.name) ||
            "未知"
          );
        }),
        x = g(() =>
          i.value.length
            ? {
                dates: i.value.map((a) => a.date),
                electricity: i.value.map((a) => a.electricity),
                water: i.value.map((a) => a.water),
              }
            : null
        );
      B(async () => {
        try {
          m.value = !0;
          const [a, t] = await Promise.all([E(), F(p)]);
          (_.value = a), (i.value = t);
        } catch (a) {
          console.error("数据加载失败:", a);
        } finally {
          m.value = !1;
        }
      });
      const D = () => {
        h.go(-1);
      };
      return (a, t) => {
        const c = d("el-page-header"),
          s = d("el-card"),
          u = d("el-col"),
          y = d("el-row"),
          k = V("loading");
        return M(
          (R(),
          W("div", S, [
            n(
              c,
              { onBack: D },
              {
                content: l(() => [e("h1", null, o(f.value) + " 能耗详情", 1)]),
                _: 1,
              }
            ),
            n(
              y,
              { gutter: 20, class: "mt-20" },
              {
                default: l(() => [
                  n(
                    u,
                    { span: 24 },
                    {
                      default: l(() => [
                        n(s, null, {
                          header: l(
                            () =>
                              t[0] ||
                              (t[0] = [e("span", null, "近7天能耗趋势", -1)])
                          ),
                          default: l(() => [
                            n(
                              I,
                              {
                                type: "line",
                                title: `${f.value}能耗趋势`,
                                data: x.value,
                                height: "400px",
                              },
                              null,
                              8,
                              ["title", "data"]
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
              y,
              { gutter: 20, class: "mt-20" },
              {
                default: l(() => [
                  n(
                    u,
                    { span: 12 },
                    {
                      default: l(() => [
                        n(s, null, {
                          header: l(
                            () =>
                              t[1] || (t[1] = [e("span", null, "用电统计", -1)])
                          ),
                          default: l(() => [
                            e("div", $, [
                              e("div", j, [
                                t[2] ||
                                  (t[2] = e("span", null, "总用电量", -1)),
                                e(
                                  "strong",
                                  null,
                                  o(r.value.electricity.total) + " kWh",
                                  1
                                ),
                              ]),
                              e("div", P, [
                                t[3] ||
                                  (t[3] = e("span", null, "日均用电", -1)),
                                e(
                                  "strong",
                                  null,
                                  o(r.value.electricity.avg.toFixed(1)) +
                                    " kWh",
                                  1
                                ),
                              ]),
                              e("div", q, [
                                t[4] ||
                                  (t[4] = e("span", null, "最高用电", -1)),
                                e(
                                  "strong",
                                  null,
                                  o(r.value.electricity.max) + " kWh",
                                  1
                                ),
                              ]),
                              e("div", z, [
                                t[5] ||
                                  (t[5] = e("span", null, "最低用电", -1)),
                                e(
                                  "strong",
                                  null,
                                  o(r.value.electricity.min) + " kWh",
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
                  n(
                    u,
                    { span: 12 },
                    {
                      default: l(() => [
                        n(s, null, {
                          header: l(
                            () =>
                              t[6] || (t[6] = [e("span", null, "用水统计", -1)])
                          ),
                          default: l(() => [
                            e("div", A, [
                              e("div", G, [
                                t[7] ||
                                  (t[7] = e("span", null, "总用水量", -1)),
                                e(
                                  "strong",
                                  null,
                                  o(r.value.water.total) + " 吨",
                                  1
                                ),
                              ]),
                              e("div", H, [
                                t[8] ||
                                  (t[8] = e("span", null, "日均用水", -1)),
                                e(
                                  "strong",
                                  null,
                                  o(r.value.water.avg.toFixed(1)) + " 吨",
                                  1
                                ),
                              ]),
                              e("div", J, [
                                t[9] ||
                                  (t[9] = e("span", null, "最高用水", -1)),
                                e(
                                  "strong",
                                  null,
                                  o(r.value.water.max) + " 吨",
                                  1
                                ),
                              ]),
                              e("div", K, [
                                t[10] ||
                                  (t[10] = e("span", null, "最低用水", -1)),
                                e(
                                  "strong",
                                  null,
                                  o(r.value.water.min) + " 吨",
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
          ])),
          [[k, m.value]]
        );
      };
    },
  },
  X = C(L, [["__scopeId", "data-v-48482ccb"]]);
export { X as default };
