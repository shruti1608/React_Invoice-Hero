import Header from "../components/Header";
import { LeftCircleTwoTone, SafetyCertificateFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Typography } from "antd";
import discount from "../images/discount-settings.png";
import { useState } from "react";

export default function Pricing() {
  const navigate = useNavigate();
  const [showdetails, setshowdetails] = useState(false);
  return (
    <div>
      <Header />

      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: "1.2rem",
          color: "#4d5055",
        }}
      >
        <div
          style={{
            marginTop: "1rem",
            marginLeft: "10rem",
            justifyContent: "flex-start",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <LeftCircleTwoTone
            onClick={() => navigate("/settings")}
            style={{ fontSize: "2rem" }}
          />

          <span
            style={{
              fontWeight: "bold",
              marginLeft: "1.2rem",
              alignSelf: "center",
              //alignItems: "center",
            }}
          >
            Invoice Hero Pricing Plans
          </span>
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              width: "15rem",
              border: "solid",
              borderWidth: "0.1rem",
              borderColor: "GrayText",
            }}
          >
            <div style={{ margin: "1rem" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Gold
                </span>

                <span>
                  <sup>$</sup>{" "}
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "2.5rem",
                    }}
                  >
                    3
                  </span>{" "}
                  <sup>/month</sup>
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginBottom: "3rem",
                }}
              >
                <img
                  src={discount}
                  style={{
                    height: "20px",
                    width: "20px",
                    alignItems: "center",
                  }}
                />{" "}
                <Typography.Text
                  delete
                  style={{
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                    fontSize: "1rem",
                  }}
                >
                  $5
                </Typography.Text>
                <Typography.Text type="success" style={{ fontSize: "1rem" }}>
                  40% off
                </Typography.Text>
              </div>

              <Divider style={{ backgroundColor: "black" }} />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span style={{ fontWeight: "bolder", fontSize: "2rem" }}>
                  150
                </span>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginLeft: "0.8rem",
                  }}
                >
                  <span>FREE</span>
                  <span>invoices/month</span>
                </div>
              </div>
              <span style={{ fontSize: "1rem" }}>3 ¢/invoice AFTER FREE</span>
              <Divider style={{ backgroundColor: "black" }} />
              <span style={{ fontSize: "1.2rem" }}>
                Best suited for stores getting up to 150 orders per month
              </span>
              <div style={{ marginTop: "2.5rem", alignSelf: "center" }}>
                <Button type="primary" shape="round" style={{ width: "13rem" }}>
                  Start Free
                </Button>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <SafetyCertificateFilled style={{ color: "green" }} />
                <span style={{ fontSize: "1rem" }}>
                  Secured by Shopify billing.
                </span>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <span style={{ fontSize: "1rem", textAlign: "center" }}>
                  Free for 7 days
                </span>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  justifyContent: "center",
                  display: "flex",
                  marginBottom: "2rem",
                }}
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAulBMVEX///9hYWNfX2FiYmTw8PDy8vLr6+v8/Pz09PT4+Pjm5ube3t7X19dlZWb29vbp6elnZ2nj4+Tt7e3Z2dnb29tqamtsbG7g4OHT09R+fn9zc3Wnp6h4eHl1dXdubnCYmJmHh4i+vr9xcXK6uruwsLGVlZaEhIWNjY6KiouBgYLHx8jBwcG1tbWdnZ6QkJF7e32tra6jo6PExMS3t7irq6ugoKGampt6envQ0NHOzs7MzMyysrOSkpTJycrSuIB+AAAOmUlEQVRo3u1aZ3ujOBDGQgIhQPRm3HHvvef//60bCRPHud1Ldvfu2+l5AhjEvEyfkaL8P/6boRsE+1o1MOH6vw1AHdMKTIbpY2DHDCyT0X8NyPCZGQB937Mu01kxn++604vl+RSzMGSa8S9A0MTyqKGd+/dVK7JVJIdqu3FjtL8yTpll4j8Uk5aEGjW77YYtaNfkKE/it12/7wKCzcT5A7H5VsLxdBnXBP0KIoqrK4kUjbua4Vm/CwNfSNl8aJccqBMXiVNzv2vYAkKdwElerNYm9Uz/d9SdBNTvNysZqfW0WAJVd2foU+BFHd/CTH2whHq5w8Pwl01ACzVSTGpATZU4UaHrCyGgjk/b4jymyrQnEVQVDqe+74fs1xTuhTxcqoK6e8hWqiCOHUm8sRxPJFhCjoLDxurQkhrrpEZi6r8gKtMjRb0UVMZwH06o1W7WH8KRp17zfhLEFxoeqTU5o+87IfkuBrGwNlBLWvaeK137YbO1x/j4c68YRQSXkhmPpt/Uvx+QdIgEFSmuXXGP3j2jBm7o2qCECsMe3bZx9RCtpjR0vqXylF9AVKg+yVZIyMVFpX7jbLDvvqWWlV676/akZUsg8EjxuDnJQHoo7vKAfceseFdqcsL8Nqp8zp3kUxMTojEPBnMwwd513YkqL0VDR7uL66jPzS9RcMpnUsR231Bm0cMN2hfMcQJx2HM039ccJmKwz4m1aZa6s2+G3nXFZPvGgy8kRgPejcrXsv5s4gqIxi2hTpA42HixQOx4AaOsyGpIzJ4XWWkfdp+H/6h9wyLnViWBuCeuWhvGPcvjP5zOILhp/bqc16pkG81oSv/BB01swRsq6rmlTSJ1GfAk9PWfvoHNkHoL9/FhpRHEb/QfQozn+R2Ye1+/AZScvib+VwFWsxxePOZH2/5RBUv2HPPnDkLbYupC0eeRuDilPEiML2MQs6g5lIzkXOmXAS5hP5kccunbau6xo5BXxySB9q2kYPnsrgLI0nTmUtJr4ycC85ykKVNGdJIMjTTf4t8MdiEjR/nOJFKlnFMc/jhiyRguh2Bo7DiW8e2wHXpYfFmZYWTQ/mEWS8gMaFcwaKhppvELySFhePn+MvyB5+s/SLYELMuNB2WoaoR+ycf3eXHYsEzUg7qropPj/V2fASmA17blC52j+EwkBudC4pRSWS86VpomUk00DHyFWb4CB01xLlfTACcz60jEZcfcgB3n1PrMCg41iLkoo8pVuGPOAwoE5p0j0Cwmk8lIg49duFEcj1N4dxu5uVK4GwV36ta04dpNT+EWLWwRiBV9CaR6ied8Ni0qGEHDbjCCCWMs0oJ+jNQVpLp2PBgsfPg9qM3TPIpTuIrjIddWLe+qbvws7l66VFgyX8DLk3ArA/LeSD4nXDqS7qQ2ewhFKZYem14aAGJ0OoGmKwJEtRR9jdq6Vh8NokCZ2ftjy9TqvbQUDHOSOkLxSZXxeKV9qi0ZS91alcLRkT8cBAMIHCBfzXQJkgKynfHUvk3VvkLHUdRX9EMtultS+RYV9UBVRXX9l+ACT4HRx0A902PKE4Rvu3kcB0+QCV/XNn27Q5VZLfNhVtGBskzGMVPLnnTGYDwv9stExm1F0nxzI9A/gIhxQLOHuJQ1OpBJLYpskFdgL+VMI0cbOc/khaTv9oBcFLCPVuzgqVqzG911XQXzCB1H+QDiTMO3VWRJkB0ovmla7tgKF2hegvBieh6gW/mCx5pgnL3DWwbi31H20baMHBQ2VYy+DfGHvnOJTwAyhfokngudtBHUKsMUmNkpyps6UEIXQFhTte2lVsn9ACAHoqT1GrrzUH/aVkBEDbThTgYzZk99GderoeDpvCgnW0XRTQmct0ASb8863oJdGWmxeyNPC4qEVo0bEGx+LPZwYsZwrzNaNlH55LcHfG8HhLLsjIVDXB32lJY2Ux/mK+zX/JNO0ONrVFIS/kieRhySzbMELSptGVjWJ7Q8KcRjVJ6xOFG4ybEYBsVEV+BHyb/jX6t4L9Wrv3sJGb+3Um5a2d3udOoDzfsqO4NE11ncGs65QgenMVP0/PSm7E+r0+m0vWTDRDEWjb1eeoPXQlUj1vAD4z2v+Q3hJbLmqLOQKg/fQBlRLBehrQL5LBp1bPWmkBVCe0W/o67SRvFqddqSCbrBtMh6VFVYthZ2Dw6xZ1b6JRJcvc1HEYRI8uBQb6t1N1Xmbr3WVWZq76Lzfa0V0kx1W5YykCB7SoihdNVMW6D9QzCBSLD2eD1zQSyWgyvj8sII2TlRtm4NtUnwEOLSHahrY9RcogLoLYS8m+hGs3hQuxslSK45jgHhXl03mpUdmQQ0D4HNuAHRC6583tdEdMw8Phe5pjII3nHn0dJsHTdobkykRxtjtCBZtG2456MEcVstEbQuEGTm77FW64KgDgSP1Zo6pRWIhi+i5cw7E/D3ue89hDiJro1s7k73qM/fQQ4kc601urclSL0z7ATy/sR/D1HsCtSzYS5cb/YEoW9qrepAu5X/+I04aburhrYGcQ8qce1o5gZ+5maqAFnrhqFLG2m/+5bmpXbZr8Kx+AAyfTdtdVaBOL2e01XRQO9DhC1Q72KA4nsJgFiQrVQJkmOM+d9ALPfdUXZfgHhR009iCIU3dFTwEkXjoW0XYMK2pYhQJ0240Wj2vwsixeW+iitZjTA/gp/N6htd0Q7NuDUpDIWOVlAbThvNqZLXm/V6fQ1z1/X8CcJKcblSXJ8Vf2uPQPE3/FC8ofkQYTnkCw2XazkeEWesGXD0Na4QTQxxk8DxqXj4ZLUz2LWk4j+aMNzWlLlIiyRU/mh4pQnrdFCa8IszHjV9Cx4/IMGfgZhkj0QPSXL3ozMSkwnW8k0GHj/Br+WpjplXLc9h8O8H84nJDF0TP33Hfy1F6QBAssUcdAJZHr8nGn+F4I4NB9RjJnnpjMa9OG62haLIuFd/k0rcNyI3LpysYSph1tu9tp04E3TUCA6tZ4DULVHZPYZ9dl6qS6eORosT6mDIupGLjjrcGqN4fB9eWcsOyAiNhURes2wV6lcQ6p9izJ9Ja8fZS0vYVM/K2Y6h5NzX2vEJK/oGNVNDpzprucEcnYDJz4XPY6A7tZ71o7MVD1SInqB5HuqvIF2o0pdEocPoCu4OvNXKaAgg/Xo0/dTmGLlcJJMNVx9X6bfKZmh0ODQQZC0Tv4CgKEInmGy5Q3pEayV1o+ABosYoe1U7DyBnofhwHEjRM+e1xADz0vEQvqLA5isngzyDpgP62vG0jYb07LoVCIpb6u5T43kBE4VGYgdCaWgh/VjcrQF+a5A+zOgQi38Esc8KFOszXXZrKAq8ViUuQACdsJeimh9Fcafp5yZCbf743KrEsGtq3D+IgOOmmvNJ8dBCdQHtcFs30RqyYuNMDSIV72doYXwweJb0EJC4Fz0b4uBLmUpCTZQSbtkvHrhlvJpwAzXYFjVA/BvUMcwmcoejSSpMWNna9vXjUsBNkrAjIBebnv/qpk8jRrHlJM9v6/RavWwR6HsRjJXzCWJccDjFceOqDVemwhfNjfH+RQmDj628ZEleg4fjBY+FRPmUBvxDWGEOAfIEc/kT6wLa83y9vOZwfPd2vkHvy5P2VEs+tXP8Lp5E0QRKf/eNhL9TqiZ+ECPU6kSxXAnAIf0UoPFWNqZnBmBo4iTer2NoAVkioMHSgeDnxpNPE0iAh2ICVS5NOC/4q0cGvmZohsd9y9cTjBnxwoCFCfu4wAOWv1YhKM50HUBQkyW+8mmE/haM7j5lIzjV3C216FMMx37ad/rm6LwbbLxxcR3P8s29GHXzo/XBo2kqQqM6SS4LoNGXxfbroLLJVu1Oaca9yweXLPrb+Z7ti3G+7uwvy/bsvtxd+tZoujmYzxDvh6dy2aMTQRic+An+gdbw1f2wTbJK8LuJWYt83e/3N/1jfsvn88Nt196dd0F7mu/Nd8txnGH1rkAq6I8W77hFN5WNu3DITPwuMQf0YGINUiHRHB1rBGOKOWTMBFd8aI5oP2z1QWIJSlZ+MBjTJvIj6uNclSjE+ubKOwl8JjDQcdm0BUbddJKfLCbRqytA+hTvI9HCXHjofcdfHIsGE8HHwjHKFcbC+JmjEYtKFo4Gz12p/S1NQvoVBDdDfm5IGbRxudA5gGD40y8yyV3sJLWLXhlj3IVDgsT4Yi0V4zx+zJ8fR6pY9fP+wZcTLZGlRmTXHmPyxpnl8J921Jrl8XSsVms2EUKgkBT/UwOtB74pGC9dRV65S4trVoj1H8wmJuCbx0j2mo1qGb11ISn/57VXeq2XMbTTvY6lZuJFSrAZylj8BKAaM0OfhnkPITF79iZngxS6PCBfbDukNJUoam4oRfkaijoF41zsMYeJxxjzzMAKGeXObBQ/diGhLZ3b8pNm3MJfmzy9SjllYTJAVYap9Qa7s4cJwdCKOj4hhKXFsak+N2lMcykL0K7c2PgSJaVmJtr6Zq8u40urhILOfDLIb93ZrDvP28OeK+FBPJncrKuL2ah+5t9zYBr4yV1FjwTX2k4X0SMmifFyAcoYzM5NtdoZ7Fg4+OaeNrcckotg+dh1msvyUpKphiQqaW8UvfvI3Hbbxxb9/r6vSd+ykmYz8faqEHbekXIBNUjijeFButTCZMMSozEj3vdX3mU0Is5GMuMuez1BdUmJTKqrzaIjzkPH2KiA2WstYyTZ8Hjg/VplQMBEryO7qj1QtDOMQ7m6pC/KekfZ9mrVY7Uzo86PzeqrmMS3Q7vSRDzNh3KrnBjbGDjIFudmpR41KwixgI1fHzwxMd7eK3dr2uUOziKPpVJqjceWsDsqNGKav7umSMMA8yCX/yDxnpddt7oSolLri5TCPKL8/gB78YgGG7At9ekllaeo8TCfMspCDyt/NgwnCH1OvGk+OrUi11Zh2G4UN8abmYk5Ni3GlX9hEKiUTYdQn4Xp5W06fbukoacRoiWB50AO+LeGgZkp9pc1TCglWPPM0AIpGf/lfyz5mBi68v/4b8ZfGmxFMp0QBfYAAAAASUVORK5CYII=" />
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <Typography.Link onClick={() => setshowdetails(!showdetails)}>
                  {showdetails ? "See less details" : "See more details"}
                </Typography.Link>
              </div>
              <div>
                {showdetails ? (
                  <div
                    style={{
                      fontSize: "0.9rem",
                      marginTop: "2rem",
                      flexDirection: "column",
                      display: "flex",
                    }}
                  >
                    <span>. Send up to 150 invoices/month</span>
                    <span>Multiple Invoice designs</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              width: "15rem",
              border: "solid",
              borderWidth: "0.1rem",
              borderColor: "GrayText",
            }}
          >
            <div style={{ margin: "1rem" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Platinum
                </span>

                <span>
                  <sup>$</sup>{" "}
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "2.5rem",
                    }}
                  >
                    7
                  </span>{" "}
                  <sup>/month</sup>
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginBottom: "3rem",
                }}
              >
                <img
                  src={discount}
                  style={{
                    height: "20px",
                    width: "20px",
                    alignItems: "center",
                  }}
                />{" "}
                <Typography.Text
                  delete
                  style={{
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                    fontSize: "1rem",
                  }}
                >
                  $9
                </Typography.Text>
                <Typography.Text type="success" style={{ fontSize: "1rem" }}>
                  23% off
                </Typography.Text>
              </div>

              <Divider style={{ backgroundColor: "black" }} />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span style={{ fontWeight: "bolder", fontSize: "2rem" }}>
                  500
                </span>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginLeft: "0.8rem",
                  }}
                >
                  <span>FREE</span>
                  <span>invoices/month</span>
                </div>
              </div>
              <span style={{ fontSize: "1rem" }}>2 ¢/invoice AFTER FREE</span>
              <Divider style={{ backgroundColor: "black" }} />
              <span style={{ fontSize: "1.2rem" }}>
                Best suited for stores getting up to 500 orders per month
              </span>
              <div style={{ marginTop: "2.5rem", alignSelf: "center" }}>
                <Button type="primary" shape="round" style={{ width: "13rem" }}>
                  Start Free
                </Button>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <SafetyCertificateFilled style={{ color: "green" }} />
                <span style={{ fontSize: "1rem" }}>
                  Secured by Shopify billing.
                </span>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <span style={{ fontSize: "1rem", textAlign: "center" }}>
                  Free for 7 days
                </span>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  justifyContent: "center",
                  display: "flex",
                  marginBottom: "2rem",
                }}
              >
                <img src="data:image/png;base64,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" />
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <Typography.Link onClick={() => setshowdetails(!showdetails)}>
                  {showdetails ? "See less details" : "See more details"}
                </Typography.Link>
              </div>
              <div>
                {showdetails ? (
                  <div
                    style={{
                      fontSize: "0.9rem",
                      marginTop: "2rem",
                      flexDirection: "column",
                      display: "flex",
                    }}
                  >
                    <span>. Send up to 150 invoices/month</span>
                    <span>Multiple Invoice designs</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              width: "15rem",
              border: "solid",
              borderWidth: "0.1rem",
              borderColor: "GrayText",
            }}
          >
            <div style={{ margin: "1rem" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Diamond
                </span>

                <span>
                  <sup>$</sup>{" "}
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "2.5rem",
                    }}
                  >
                    8
                  </span>{" "}
                  <sup>/month</sup>
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginBottom: "3rem",
                }}
              >
                <img
                  src={discount}
                  style={{
                    height: "20px",
                    width: "20px",
                    alignItems: "center",
                  }}
                />{" "}
                <Typography.Text
                  delete
                  style={{
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                    fontSize: "1rem",
                  }}
                >
                  $13
                </Typography.Text>
                <Typography.Text type="success" style={{ fontSize: "1rem" }}>
                  39% off
                </Typography.Text>
              </div>

              <Divider style={{ backgroundColor: "black" }} />
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span style={{ fontWeight: "bolder", fontSize: "2rem" }}>
                  ∞
                </span>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginLeft: "0.8rem",
                  }}
                >
                  <span>FREE</span>
                  <span>invoices/month</span>
                </div>
              </div>
              <span style={{ fontSize: "1rem" }}>UNLIMITED FREE invoices</span>
              <Divider style={{ backgroundColor: "black" }} />
              <span style={{ fontSize: "1.2rem" }}>
                Best suited for stores getting up to 500 orders per month
              </span>
              <div style={{ marginTop: "2.5rem", alignSelf: "center" }}>
                <Button
                  type="primary"
                  shape="round"
                  style={{ width: "13rem", backgroundColor: "#04cea4" }}
                >
                  Current Plan
                </Button>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <SafetyCertificateFilled style={{ color: "green" }} />
                <span style={{ fontSize: "1rem" }}>
                  Secured by Shopify billing.
                </span>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <span style={{ fontSize: "1rem", textAlign: "center" }}>
                  Free for 7 days
                </span>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  justifyContent: "center",
                  display: "flex",
                  marginBottom: "2rem",
                }}
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAulBMVEX///9hYWNfX2FiYmTw8PDy8vLr6+v8/Pz09PT4+Pjm5ube3t7X19dlZWb29vbp6elnZ2nj4+Tt7e3Z2dnb29tqamtsbG7g4OHT09R+fn9zc3Wnp6h4eHl1dXdubnCYmJmHh4i+vr9xcXK6uruwsLGVlZaEhIWNjY6KiouBgYLHx8jBwcG1tbWdnZ6QkJF7e32tra6jo6PExMS3t7irq6ugoKGampt6envQ0NHOzs7MzMyysrOSkpTJycrSuIB+AAAOmUlEQVRo3u1aZ3ujOBDGQgIhQPRm3HHvvef//60bCRPHud1Ldvfu2+l5AhjEvEyfkaL8P/6boRsE+1o1MOH6vw1AHdMKTIbpY2DHDCyT0X8NyPCZGQB937Mu01kxn++604vl+RSzMGSa8S9A0MTyqKGd+/dVK7JVJIdqu3FjtL8yTpll4j8Uk5aEGjW77YYtaNfkKE/it12/7wKCzcT5A7H5VsLxdBnXBP0KIoqrK4kUjbua4Vm/CwNfSNl8aJccqBMXiVNzv2vYAkKdwElerNYm9Uz/d9SdBNTvNysZqfW0WAJVd2foU+BFHd/CTH2whHq5w8Pwl01ACzVSTGpATZU4UaHrCyGgjk/b4jymyrQnEVQVDqe+74fs1xTuhTxcqoK6e8hWqiCOHUm8sRxPJFhCjoLDxurQkhrrpEZi6r8gKtMjRb0UVMZwH06o1W7WH8KRp17zfhLEFxoeqTU5o+87IfkuBrGwNlBLWvaeK137YbO1x/j4c68YRQSXkhmPpt/Uvx+QdIgEFSmuXXGP3j2jBm7o2qCECsMe3bZx9RCtpjR0vqXylF9AVKg+yVZIyMVFpX7jbLDvvqWWlV676/akZUsg8EjxuDnJQHoo7vKAfceseFdqcsL8Nqp8zp3kUxMTojEPBnMwwd513YkqL0VDR7uL66jPzS9RcMpnUsR231Bm0cMN2hfMcQJx2HM039ccJmKwz4m1aZa6s2+G3nXFZPvGgy8kRgPejcrXsv5s4gqIxi2hTpA42HixQOx4AaOsyGpIzJ4XWWkfdp+H/6h9wyLnViWBuCeuWhvGPcvjP5zOILhp/bqc16pkG81oSv/BB01swRsq6rmlTSJ1GfAk9PWfvoHNkHoL9/FhpRHEb/QfQozn+R2Ye1+/AZScvib+VwFWsxxePOZH2/5RBUv2HPPnDkLbYupC0eeRuDilPEiML2MQs6g5lIzkXOmXAS5hP5kccunbau6xo5BXxySB9q2kYPnsrgLI0nTmUtJr4ycC85ykKVNGdJIMjTTf4t8MdiEjR/nOJFKlnFMc/jhiyRguh2Bo7DiW8e2wHXpYfFmZYWTQ/mEWS8gMaFcwaKhppvELySFhePn+MvyB5+s/SLYELMuNB2WoaoR+ycf3eXHYsEzUg7qropPj/V2fASmA17blC52j+EwkBudC4pRSWS86VpomUk00DHyFWb4CB01xLlfTACcz60jEZcfcgB3n1PrMCg41iLkoo8pVuGPOAwoE5p0j0Cwmk8lIg49duFEcj1N4dxu5uVK4GwV36ta04dpNT+EWLWwRiBV9CaR6ied8Ni0qGEHDbjCCCWMs0oJ+jNQVpLp2PBgsfPg9qM3TPIpTuIrjIddWLe+qbvws7l66VFgyX8DLk3ArA/LeSD4nXDqS7qQ2ewhFKZYem14aAGJ0OoGmKwJEtRR9jdq6Vh8NokCZ2ftjy9TqvbQUDHOSOkLxSZXxeKV9qi0ZS91alcLRkT8cBAMIHCBfzXQJkgKynfHUvk3VvkLHUdRX9EMtultS+RYV9UBVRXX9l+ACT4HRx0A902PKE4Rvu3kcB0+QCV/XNn27Q5VZLfNhVtGBskzGMVPLnnTGYDwv9stExm1F0nxzI9A/gIhxQLOHuJQ1OpBJLYpskFdgL+VMI0cbOc/khaTv9oBcFLCPVuzgqVqzG911XQXzCB1H+QDiTMO3VWRJkB0ovmla7tgKF2hegvBieh6gW/mCx5pgnL3DWwbi31H20baMHBQ2VYy+DfGHvnOJTwAyhfokngudtBHUKsMUmNkpyps6UEIXQFhTte2lVsn9ACAHoqT1GrrzUH/aVkBEDbThTgYzZk99GderoeDpvCgnW0XRTQmct0ASb8863oJdGWmxeyNPC4qEVo0bEGx+LPZwYsZwrzNaNlH55LcHfG8HhLLsjIVDXB32lJY2Ux/mK+zX/JNO0ONrVFIS/kieRhySzbMELSptGVjWJ7Q8KcRjVJ6xOFG4ybEYBsVEV+BHyb/jX6t4L9Wrv3sJGb+3Um5a2d3udOoDzfsqO4NE11ncGs65QgenMVP0/PSm7E+r0+m0vWTDRDEWjb1eeoPXQlUj1vAD4z2v+Q3hJbLmqLOQKg/fQBlRLBehrQL5LBp1bPWmkBVCe0W/o67SRvFqddqSCbrBtMh6VFVYthZ2Dw6xZ1b6JRJcvc1HEYRI8uBQb6t1N1Xmbr3WVWZq76Lzfa0V0kx1W5YykCB7SoihdNVMW6D9QzCBSLD2eD1zQSyWgyvj8sII2TlRtm4NtUnwEOLSHahrY9RcogLoLYS8m+hGs3hQuxslSK45jgHhXl03mpUdmQQ0D4HNuAHRC6583tdEdMw8Phe5pjII3nHn0dJsHTdobkykRxtjtCBZtG2456MEcVstEbQuEGTm77FW64KgDgSP1Zo6pRWIhi+i5cw7E/D3ue89hDiJro1s7k73qM/fQQ4kc601urclSL0z7ATy/sR/D1HsCtSzYS5cb/YEoW9qrepAu5X/+I04aburhrYGcQ8qce1o5gZ+5maqAFnrhqFLG2m/+5bmpXbZr8Kx+AAyfTdtdVaBOL2e01XRQO9DhC1Q72KA4nsJgFiQrVQJkmOM+d9ALPfdUXZfgHhR009iCIU3dFTwEkXjoW0XYMK2pYhQJ0240Wj2vwsixeW+iitZjTA/gp/N6htd0Q7NuDUpDIWOVlAbThvNqZLXm/V6fQ1z1/X8CcJKcblSXJ8Vf2uPQPE3/FC8ofkQYTnkCw2XazkeEWesGXD0Na4QTQxxk8DxqXj4ZLUz2LWk4j+aMNzWlLlIiyRU/mh4pQnrdFCa8IszHjV9Cx4/IMGfgZhkj0QPSXL3ozMSkwnW8k0GHj/Br+WpjplXLc9h8O8H84nJDF0TP33Hfy1F6QBAssUcdAJZHr8nGn+F4I4NB9RjJnnpjMa9OG62haLIuFd/k0rcNyI3LpysYSph1tu9tp04E3TUCA6tZ4DULVHZPYZ9dl6qS6eORosT6mDIupGLjjrcGqN4fB9eWcsOyAiNhURes2wV6lcQ6p9izJ9Ja8fZS0vYVM/K2Y6h5NzX2vEJK/oGNVNDpzprucEcnYDJz4XPY6A7tZ71o7MVD1SInqB5HuqvIF2o0pdEocPoCu4OvNXKaAgg/Xo0/dTmGLlcJJMNVx9X6bfKZmh0ODQQZC0Tv4CgKEInmGy5Q3pEayV1o+ABosYoe1U7DyBnofhwHEjRM+e1xADz0vEQvqLA5isngzyDpgP62vG0jYb07LoVCIpb6u5T43kBE4VGYgdCaWgh/VjcrQF+a5A+zOgQi38Esc8KFOszXXZrKAq8ViUuQACdsJeimh9Fcafp5yZCbf743KrEsGtq3D+IgOOmmvNJ8dBCdQHtcFs30RqyYuNMDSIV72doYXwweJb0EJC4Fz0b4uBLmUpCTZQSbtkvHrhlvJpwAzXYFjVA/BvUMcwmcoejSSpMWNna9vXjUsBNkrAjIBebnv/qpk8jRrHlJM9v6/RavWwR6HsRjJXzCWJccDjFceOqDVemwhfNjfH+RQmDj628ZEleg4fjBY+FRPmUBvxDWGEOAfIEc/kT6wLa83y9vOZwfPd2vkHvy5P2VEs+tXP8Lp5E0QRKf/eNhL9TqiZ+ECPU6kSxXAnAIf0UoPFWNqZnBmBo4iTer2NoAVkioMHSgeDnxpNPE0iAh2ICVS5NOC/4q0cGvmZohsd9y9cTjBnxwoCFCfu4wAOWv1YhKM50HUBQkyW+8mmE/haM7j5lIzjV3C216FMMx37ad/rm6LwbbLxxcR3P8s29GHXzo/XBo2kqQqM6SS4LoNGXxfbroLLJVu1Oaca9yweXLPrb+Z7ti3G+7uwvy/bsvtxd+tZoujmYzxDvh6dy2aMTQRic+An+gdbw1f2wTbJK8LuJWYt83e/3N/1jfsvn88Nt196dd0F7mu/Nd8txnGH1rkAq6I8W77hFN5WNu3DITPwuMQf0YGINUiHRHB1rBGOKOWTMBFd8aI5oP2z1QWIJSlZ+MBjTJvIj6uNclSjE+ubKOwl8JjDQcdm0BUbddJKfLCbRqytA+hTvI9HCXHjofcdfHIsGE8HHwjHKFcbC+JmjEYtKFo4Gz12p/S1NQvoVBDdDfm5IGbRxudA5gGD40y8yyV3sJLWLXhlj3IVDgsT4Yi0V4zx+zJ8fR6pY9fP+wZcTLZGlRmTXHmPyxpnl8J921Jrl8XSsVms2EUKgkBT/UwOtB74pGC9dRV65S4trVoj1H8wmJuCbx0j2mo1qGb11ISn/57VXeq2XMbTTvY6lZuJFSrAZylj8BKAaM0OfhnkPITF79iZngxS6PCBfbDukNJUoam4oRfkaijoF41zsMYeJxxjzzMAKGeXObBQ/diGhLZ3b8pNm3MJfmzy9SjllYTJAVYap9Qa7s4cJwdCKOj4hhKXFsak+N2lMcykL0K7c2PgSJaVmJtr6Zq8u40urhILOfDLIb93ZrDvP28OeK+FBPJncrKuL2ah+5t9zYBr4yV1FjwTX2k4X0SMmifFyAcoYzM5NtdoZ7Fg4+OaeNrcckotg+dh1msvyUpKphiQqaW8UvfvI3Hbbxxb9/r6vSd+ykmYz8faqEHbekXIBNUjijeFButTCZMMSozEj3vdX3mU0Is5GMuMuez1BdUmJTKqrzaIjzkPH2KiA2WstYyTZ8Hjg/VplQMBEryO7qj1QtDOMQ7m6pC/KekfZ9mrVY7Uzo86PzeqrmMS3Q7vSRDzNh3KrnBjbGDjIFudmpR41KwixgI1fHzwxMd7eK3dr2uUOziKPpVJqjceWsDsqNGKav7umSMMA8yCX/yDxnpddt7oSolLri5TCPKL8/gB78YgGG7At9ekllaeo8TCfMspCDyt/NgwnCH1OvGk+OrUi11Zh2G4UN8abmYk5Ni3GlX9hEKiUTYdQn4Xp5W06fbukoacRoiWB50AO+LeGgZkp9pc1TCglWPPM0AIpGf/lfyz5mBi68v/4b8ZfGmxFMp0QBfYAAAAASUVORK5CYII=" />
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <Typography.Link onClick={() => setshowdetails(!showdetails)}>
                  {showdetails ? "See less details" : "See more details"}
                </Typography.Link>
              </div>
              <div>
                {showdetails ? (
                  <div
                    style={{
                      fontSize: "0.9rem",
                      marginTop: "2rem",
                      flexDirection: "column",
                      display: "flex",
                    }}
                  >
                    <span>. Send up to 150 invoices/month</span>
                    <span>Multiple Invoice designs</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              width: "15rem",
              border: "solid",
              borderWidth: "0.1rem",
              borderColor: "GrayText",
            }}
          >
            <div style={{ margin: "1rem" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Free
                </span>

                <span>
                  <sup>$</sup>{" "}
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "2.5rem",
                    }}
                  >
                    0
                  </span>{" "}
                  <sup>/month</sup>
                </span>
              </div>
              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginBottom: "3rem",
                }}
              >
                <img
                  src={discount}
                  style={{
                    height: "20px",
                    width: "20px",
                    alignItems: "center",
                  }}
                />{" "}
                <Typography.Text
                  delete
                  style={{
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                    fontSize: "1rem",
                  }}
                >
                  $5
                </Typography.Text>
                <Typography.Text type="success" style={{ fontSize: "1rem" }}>
                  40% off
                </Typography.Text>
              </div> */}

              <Divider
                style={{ backgroundColor: "black", marginTop: "4.7rem" }}
              />

              <div style={{ display: "flex", flexDirection: "row" }}>
                <span style={{ fontWeight: "bolder", fontSize: "2rem" }}>
                  50
                </span>
                <div
                  style={{
                    flexDirection: "column",
                    display: "flex",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginLeft: "0.8rem",
                  }}
                >
                  <span>FREE</span>
                  <span>invoices/month</span>
                </div>
              </div>
              {/* <span style={{ fontSize: "1rem" }}>3 ¢/invoice AFTER FREE</span> */}
              <Divider
                style={{ backgroundColor: "black", marginTop: "2.8rem" }}
              />
              <span style={{ fontSize: "1.2rem" }}>
                Best suited for stores getting up to 50 orders per month
              </span>
              <div style={{ marginTop: "2.5rem", alignSelf: "center" }}>
                <Button shape="round" style={{ width: "13rem" }}>
                  Select
                </Button>
              </div>
              {/* <div style={{ marginTop: "2rem" }}>
                <SafetyCertificateFilled style={{ color: "green" }} />
                <span style={{ fontSize: "1rem" }}>
                  Secured by Shopify billing.
                </span>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <span style={{ fontSize: "1rem", textAlign: "center" }}>
                  Free for 7 days
                </span>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  justifyContent: "center",
                  display: "flex",
                  marginBottom: "2rem",
                }}
              >
                <img src="data:image/png;base64,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" />
              </div> */}
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "15rem",
                }}
              >
                <Typography.Link onClick={() => setshowdetails(!showdetails)}>
                  {showdetails ? "See less details" : "See more details"}
                </Typography.Link>
              </div>
              <div>
                {showdetails ? (
                  <div
                    style={{
                      fontSize: "0.9rem",
                      marginTop: "2rem",
                      flexDirection: "column",
                      display: "flex",
                    }}
                  >
                    <span>. Send up to 150 invoices/month</span>
                    <span>Multiple Invoice designs</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
