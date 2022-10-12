import React from "react";
import "./Styles.css";

export default function Body() {
  return (
    <tbody>
      <tr>
        <td>Under Weight</td>
        <td>Bellow 18.5</td>
      </tr>
      <tr>
        <td>Normal Weight</td>
        <td>Between 18.5 and 24.9</td>
      </tr>
      <tr>
        <td>Overweight</td>
        <td>Between 25 and 29.9</td>
      </tr>
      <tr>
        <td>Obesity</td>
        <td>Between 30 and 34.9</td>
      </tr>
      <tr>
        <td>Severe Obesity</td>
        <td>Between 45 and 39.9</td>
      </tr>
      <tr>
        <td>Morbid Obesity</td>
        <td>Over 40</td>
      </tr>
    </tbody>
  );
};
