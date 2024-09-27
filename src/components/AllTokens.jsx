import { Box, Paper } from "@mui/material";
import React from "react";

function AllTokens({ tokenData }) {
  let tokens = [];
  const generateTokens = (totaltokens, tokensPerRow, prefix, tokenColor) => {
    tokens = [];

    let prefixCount = 1;
    let tokensGenerated = 0;

    while (tokensGenerated < totaltokens) {
      let tokensInCurrentRow = Math.min(
        tokensPerRow,
        totaltokens - tokensGenerated,
      );

      const circles = [];
      const preFixCount = 1;

      for (let i = 1; i <= tokensInCurrentRow; i++) {
        circles.push(
          <div
            key={i}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: tokenColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              boxShadow:
                "0 6px 15px rgba(0, 0, 0, 0.4), inset 0 -2px 5px rgba(255, 255, 255, 0.2)",
              transform: "translateY(-2px)",
              transition: "transform 0.1s, box-shadow 0.1s",
            }}
          >
            {prefix}
            {prefixCount}
          </div>,
        );
        prefixCount++;
      }

      tokens.push(circles);

      tokensGenerated = tokensGenerated + tokensInCurrentRow;
    }
  };

  return (
    <div className="tokenContainer">
      <Box style={{ width: "100%" }}>
        <Box style={{ display: "block", margin: "0 auto" }}>
          {/* Blue tokens */}
          {generateTokens(
            parseInt(tokenData?.noOfBlueTokens),
            parseInt(tokenData?.blueTokenPerRow),
            tokenData?.blueTokenPrefix,
            "blue",
          )}
          <div className="flex">
            <div>
              {tokens.map((tokenRow, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
                >
                  {tokenRow.map((token, index) => (
                    <div key={index}>{token}</div>
                  ))}
                </div>
              ))}
            </div>
            {(tokens = [])}
          </div>

          {/* Red tokens */}
          {generateTokens(
            parseInt(tokenData?.noOfRedTokens),
            parseInt(tokenData?.redTokenPerRow),
            tokenData?.redTokenPrefix,
            "red",
          )}
          <div className="flex">
            <div>
              {tokens.map((tokenRow, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
                >
                  {tokenRow.map((token, index) => (
                    <div key={index}>{token}</div>
                  ))}
                </div>
              ))}
            </div>
            {(tokens = [])}
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default AllTokens;
