// import { useState } from 'react';
// import EyeIcon from './EyeIcon';
// import CloseEye from './CloseEye';
//
// function Inputs({
//   placeholder,
//   width,
//   height,
//   type,
//   showEye = false,
//   eyeWidth,
//   eyeColor,
// }) {
//   const [showPassword, setShowPassword] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const togglePassword = () => setShowPassword(!showPassword);
//   return (
//     <div
//       className={`input-container ${showEye ? 'with-icon' : ''}`}
//       style={{ width: width || '100%' }}
//     >
//       <input
//         className="custom-input"
//         placeholder={placeholder}
//         type={showEye ? (showPassword ? 'text' : 'password') : type}
//         style={{ height: height || '45px' }}
//         value={inputValue}
//         onChange={(event) => setInputValue(event.target.value)}
//       />
//       {showEye && (
//         <div className="input-icon" onClick={togglePassword}>
//           {showPassword ? (
//             <EyeIcon eyeWidth={eyeWidth} eyeColor={eyeColor} />
//           ) : (
//             <CloseEye eyeWidth={eyeWidth} eyeColor={eyeColor} />
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
//
// export default Inputs;
import { useState } from 'react';
import EyeIcon from './EyeIcon';
import CloseEye from './CloseEye';

function Inputs({
  placeholder,
  width,
  height,
  type,
  showEye = false,
  eyeWidth,
  eyeColor,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div
      className={`inputs-container ${showEye ? 'with-icon' : ''}`}
      style={{ width: width || '100%' }}
    >
      <input
        className="custom-input"
        placeholder={placeholder}
        type={showEye ? (showPassword ? 'text' : 'password') : type}
        style={{ height: height || '45px' }}
      />
      {showEye && (
        <div className="input-icon" onClick={togglePassword}>
          {showPassword ? (
            <EyeIcon width={eyeWidth} color={eyeColor} />
          ) : (
            <CloseEye width={eyeWidth} color={eyeColor} />
          )}
        </div>
      )}
    </div>
  );
}

export default Inputs;
