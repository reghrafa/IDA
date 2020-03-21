import React from "react";
import Article from "../../components/composite/article/Article";
import I18n from "../../../translations/I18n";

export interface IImprintScreenProps { }

// TODO: Maybe put in translation File?!

const imprintMarkdown = `
### Information according to § 5 TMG
EDUBAO GmbH Quedlinburger Str. 11 10589 Berlin  Register Number: HRB 208988 B Register court: Charlottenburg (Berlin)  Ust. IdNr.: DE319893388  Represented by the Managing Directors: Nga Le, Lorenz Schneidmadel, Rafael Regh  Contact Phone: +49 (0) 159 02026265 E-mail: info@edubao.org
### European online dispute resolution platform:
The European commission has set up an European online dispute resolution platform (ODR platform) under the following link: http://ec.europa.eu/consumers/odr/. A consumer may access the ODR platform for purposes of any extrajudicial settlement of disputes arising from online contracts for services concluded with a business established within the EU.
### Accountability for content
The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents’ accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
### Accountability for links
Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.
### Copyright
Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).
`;

const ImprintScreen: React.FC<IImprintScreenProps> = () => (
    <Article
        article={{
            heroImage: "",
            id: "0000000000",
            teaserText: "",
            title: I18n.t("profile.imprint.title"),
            content: imprintMarkdown,
            index: 0,
            tags: [],
            subCategory: []
        }}
        noReadMore
        noCategory
        noBookmarkButton
        noLinkButton
        headerBackgroundColor="primary"
        bottomMargin
    />
);

export default ImprintScreen;
