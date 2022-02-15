import { Fragment } from "react";
import { AccountsData } from "../../utils/data_mock/data_account";
import ProfilBodyElement from "../ProfilBodyElement";

function ProfilBody() {
  return (
    <Fragment>
      <h2 className="sr-only">Accounts</h2>
      {AccountsData.map(({ id, title, amount, description }) => (
        <ProfilBodyElement
          key={id}
          title={title}
          amount={amount}
          description={description}
        />
      ))}
    </Fragment>
  );
}

export default ProfilBody;
