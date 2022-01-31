import { useState } from 'react';
import DateRegisterBody from '../../DateRegisterBody';
import { BootstrapPopUpSkeleton } from '../../../../presentational/molecules/BootstrapPopUpSkeleton/BootstrapPopUpSkeleton';

type ARNKDateRegisterProps = {
  openFSHPopUp: boolean;
  onCloseFSHPopUp?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ARNKDateRegister = ({
  openFSHPopUp,
  onCloseFSHPopUp,
}: ARNKDateRegisterProps) => {


  const [errorData] = useState([
    { errorMsg: '[Error] Date entry is required.[AVAILERR84][GUI]' },
  ]);

 

  return (
    <BootstrapPopUpSkeleton
      label="Specific Date for ARNK"
      openPopUp={openFSHPopUp}
      onClosePopUp={onCloseFSHPopUp}
      popUpClassName="FSHModalContent"
      showCloseBtn
      showRegisterBtn
      errorData={errorData}
    >
      <DateRegisterBody errorData={errorData} />
    </BootstrapPopUpSkeleton>
  );
};
ARNKDateRegister.defaultProps = {
  onCloseFSHPopUp: null,
};
export default ARNKDateRegister;
