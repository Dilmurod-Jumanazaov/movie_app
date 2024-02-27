import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`

export const Row = styled.div.withConfig({
  shouldForwardProp: (prop) => !["alignitems", "justifycontent", "flexwrap", "gap"].includes(prop),
})`
  display: flex;
  align-items: ${(prop) => (prop.alignitems ? prop.alignitems : "stretch")};
  justify-content: ${(prop) => (prop.justifycontent ? prop.justifycontent : "flex-start")};
  flex-wrap: ${(prop) => (prop.flexwrap ? prop.flexwrap : "no-wrap")};
  gap: ${(prop) => (prop.gap ? prop.gap : "0px")};
`