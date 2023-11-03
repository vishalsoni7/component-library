import { SideBar } from "../../sidebar/SideBar";

import "./text.css";

export const Text = () => {
  return (
    <div className="global-flex-div">
      {" "}
      <SideBar />
      <div className="heading-child-div">
        <h2> Text Component </h2>
        <p> Text is use to render semanttic HTML heading elements. </p>

        <div>
          <table className="text-table">
            <tr>
              <th>HTML Tag and Usage</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>&lt;p&gt;</td>
              <td> Represents a paragraph of text.</td>
            </tr>
            <tr>
              <td>
                &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;,
                &lt;h6&gt;
              </td>
              <td>
                Headings that represent different levels of hierarchy in the
                document.
              </td>
            </tr>
            <tr>
              <td>
                &lt; <a href="https://4hwkr8.csb.app/text"> a </a> &gt;
              </td>
              <td>
                Represents hyperlinks, allowing text to be linked to other web
                pages or resources.
              </td>
            </tr>
            <tr>
              <td>
                &lt; <strong> strong </strong>&gt;
              </td>
              <td>
                Represents strong importance, often displayed as bold text.
              </td>
            </tr>
            <tr>
              <td>
                &lt; <em> em </em>&gt;
              </td>
              <td>
                Represents emphasized text, often displayed as italicized text.
              </td>
            </tr>
            <tr>
              <td>&lt;span&gt;</td>
              <td>
                A generic inline container that can be used to apply styles or
                manipulate text content.
              </td>
            </tr>
            <tr>
              <td>&lt; blockquote&gt;</td>
              <td>
                Represents a block of text that is quoted from another source.
              </td>
            </tr>
            <tr>
              <td>
                &lt; <code> code </code> &gt;
              </td>
              <td>Represents a snippet of code or computer code.</td>
            </tr>
            <tr>
              <td>&lt;pre&gt;</td>
              <td>
                Preserves whitespace and line breaks, often used for displaying
                code or text formatting.
              </td>
            </tr>
            <tr>
              <td>&lt;abbr&gt;</td>
              <td>Represents an abbreviation or acronym.</td>
            </tr>
            <tr>
              <td>
                &lt; <del> del</del>&gt;
              </td>
              <td>Represents deleted or struck-through text.</td>
            </tr>
            <tr>
              <td>
                &lt; <ins> ins </ins>&gt;
              </td>
              <td>Represents inserted text.</td>
            </tr>
            <tr>
              <td>&lt; sup&gt;</td>
              <td>
                Represents <sup> superscript </sup> text.
              </td>
            </tr>
            <tr>
              <td>&lt;sub&gt;</td>
              <td>
                Represents <sub> subscript</sub> text.
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
