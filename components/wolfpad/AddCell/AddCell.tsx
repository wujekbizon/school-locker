import styles from './AddCell.module.css';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useActions } from '../../../hooks/useActions';

interface AddCellProps {
  prevCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ prevCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div
      className={`${forceVisible && styles.force_visible} ${styles.add_cell}`}
    >
      <div className={styles.add_buttons}>
        <button
          className={styles.add_btn}
          onClick={() => insertCellAfter({ id: prevCellId, type: 'code' })}
        >
          <span className={styles.icon}>
            <AddOutlinedIcon />
          </span>
          <span>Code</span>
        </button>
        <button
          className={styles.add_btn}
          onClick={() => insertCellAfter({ id: prevCellId, type: 'text' })}
        >
          <span className={styles.icon}>
            <AddOutlinedIcon />
          </span>{' '}
          <span>Text</span>
        </button>
      </div>
      <div className={styles.divider} />
    </div>
  );
};

export default AddCell;
