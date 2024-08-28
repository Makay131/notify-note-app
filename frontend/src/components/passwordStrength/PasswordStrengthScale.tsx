import { Check, X } from 'lucide-react';
import { criteria, getStrength, getStrengthText, getColor } from '../../utils/passwordCriteria';

import styles from './passwordStrength.module.css';

type PasswordCriteriaProps = {
  password: string;
};

const PasswordCriteria = ({ password }: PasswordCriteriaProps) => {
  const conditions = criteria(password);

  return (
    <div className={styles['condition-wrapper']}>
      {conditions?.map((item) => (
        <div key={item.label} className={styles['condition-item']}>
          {item.met ? <Check className={styles['condition-success']} /> : <X className={styles['condition-error']} />}
          <span className={item.met ? styles['condition-label__success'] : styles['condition-label__error']}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const PasswordStrengthScale = ({ password }: PasswordCriteriaProps) => {
  const strength = getStrength(password);
  const strenghtText = getStrengthText(strength);

  return (
    <div className={styles['bar-wrapper']}>
      <div className={styles['bar-heading']}>
        <span className={styles['bar-heading__label']}>Password strength</span>
        <span className={styles['bar-heading__strength']}>{strenghtText}</span>
      </div>

      <div className={styles[`bars-wrapper`]}>
        {[...Array(4)].map((_, index) => (
          <div key={index} className={`${styles.bar} ${index < strength ? getColor(strength) : 'bg-gray-600'}`} />
        ))}
      </div>
      <PasswordCriteria password={password} />
    </div>
  );
};

export default PasswordStrengthScale;
