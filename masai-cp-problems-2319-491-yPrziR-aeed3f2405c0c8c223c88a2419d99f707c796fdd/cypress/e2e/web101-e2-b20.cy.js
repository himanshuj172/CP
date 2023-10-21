
import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

// import { start, submitData } from "../../../data";

describe("Web-101 C2 Evaluation", function () {
  let acc_score = 1;

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }

    
    if (url && url.length) {
      // url = modifyUrl(url);
      acc_score = 1;
    it("Services section grid and flex checking", () => {
      cy.visit(url);
      cy.get(".services")
        .should("have.css", "display", "grid")
        .then(() => {
          acc_score += 1;
        });
      cy.get(".services>div")
        .should("have.css", "display", "flex")
        .then(() => {
          acc_score += 1;
        });
    }); // 2

    it("Check mobile friendlyness of services section", () => {
      cy.viewport(500, 750);
      cy.get(".services>div")
        .should("have.css", "flex-direction", "column")
        .then(() => {
          acc_score += 1;
        });
    }); // 1

    it("Check flex boxes in Discover Section", () => {
      cy.get(".discover")
        .should("have.css", "display", "flex")
        .then(() => {
          acc_score += 1;
        });
    }); // 1

    it("Check mobile friendlyness of Discover section", () => {
      cy.viewport(500, 750);
      cy.get(".discover")
        .should("have.css", "flex-direction", "column")
        .then(() => {
          acc_score += 1;
        });
    }); // 1

    it("Check the Doctors Section", () => {
      cy.get(".doctors")
        .should("have.css", "display", "flex")
        .then(() => {
          acc_score += 1;
        });

      cy.get(".doctors>div")
        .eq(1)
        .should("have.css", "display", "grid")
        .then(() => {
          acc_score += 1;
        });
    }); // 2

    it("Check mobilefriendly in Doctors Section", () => {
      cy.viewport(700, 750);
      cy.get(".doctors")
        .should("have.css", "flex-direction", "column")
        .then(() => {
          acc_score += 1;
        });
    }); // 1

    it("Text-align Center for h1 and p tags", () => {
      cy.get("h1")
        .should("have.css", "text-align", "center")
        .then(() => {
          acc_score += 0.5;
        });
      cy.get("p")
        .should("have.css", "text-align", "center")
        .then(() => {
          acc_score += 0.5;
        });
    }); // 1
    }

    it(`generate score`, () => {
      //////////////
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
