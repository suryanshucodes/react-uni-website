import React from "react";
import "./css/academics.css";

function Academics() {
  document.title = "UIET Academics";
  return (
    <div>
      <h1 className="academics-h1">ACADEMICS</h1>
      <hr style={{ borderTop: "0.2em solid #f4a024", margin: "0 0 0 0" }} />
      <div className="academics-container">
        <table>
          <thead>
            <tr>
              <th>Branch</th>
              <th>Year</th>
              <th>Admissions</th>
              <th>Graduates</th>
              <th>Research Papers per Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={3}>Biotechnology</td>
              <td>2017</td>
              <td>80</td>
              <td>74</td>
              <td>10</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>80</td>
              <td>70</td>
              <td>15</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>90</td>
              <td>73</td>
              <td>7</td>
            </tr>
            <tr>
              <td rowSpan={3}>Computer Science</td>
              <td>2017</td>
              <td>120</td>
              <td>95</td>
              <td>25</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>120</td>
              <td>110</td>
              <td>17</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>115</td>
              <td>97</td>
              <td>21</td>
            </tr>
            <tr>
              <td rowSpan={3}>Electrical &amp; Electronics</td>
              <td>2017</td>
              <td>150</td>
              <td>120</td>
              <td>40</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>120</td>
              <td>110</td>
              <td>17</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>140</td>
              <td>117</td>
              <td>12</td>
            </tr>
            <tr>
              <td rowSpan={3}>Electronics &amp; Communication</td>
              <td>2017</td>
              <td>180</td>
              <td>150</td>
              <td>35</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>180</td>
              <td>173</td>
              <td>23</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>175</td>
              <td>160</td>
              <td>17</td>
            </tr>
            <tr>
              <td rowSpan={3}>Mechanical</td>
              <td>2017</td>
              <td>90</td>
              <td>70</td>
              <td>5</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>88</td>
              <td>67</td>
              <td>12</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>75</td>
              <td>81</td>
              <td>25</td>
            </tr>
            <tr>
              <td rowSpan={3}>Information Technology</td>
              <td>2017</td>
              <td>120</td>
              <td>105</td>
              <td>20</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>118</td>
              <td>108</td>
              <td>15</td>
            </tr>
            <tr>
              <td>2019</td>
              <td>125</td>
              <td>109</td>
              <td>24</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Academics;
