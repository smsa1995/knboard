/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Button } from "@material-ui/core";
import { N80A, N900 } from "utils/colors";
import { ITask, Id } from "types";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "@emotion/core";
import { jake } from "data";
import TaskEditor from "./TaskEditor";
import { useDispatch } from "react-redux";
import { setDialogOpen, setDialogColumn } from "./TaskSlice";
import TaskDialog from "./TaskDialog";

interface Props {
  columnId: Id;
}

const AddTask = ({ columnId }: Props) => {
  const dispatch = useDispatch();
  const [adding, setAdding] = React.useState<boolean>(false);

  const handleOnClick = () => {
    dispatch(setDialogColumn(columnId));
    dispatch(setDialogOpen(true));
  };

  return (
    <Button
      css={css`
        text-transform: inherit;
        color: ${N80A};
        padding: 4px 0;
        margin-top: 6px;
        margin-bottom: 6px;
        &:hover {
          color: ${N900};
        }
        &:focus {
          outline: 2px solid #aaa;
        }
        .MuiButton-iconSizeMedium > *:first-of-type {
          font-size: 12px;
        }
      `}
      startIcon={<FontAwesomeIcon icon={faPlus} />}
      onClick={handleOnClick}
      fullWidth
    >
      Add another card
    </Button>
  );
};

export default AddTask;
