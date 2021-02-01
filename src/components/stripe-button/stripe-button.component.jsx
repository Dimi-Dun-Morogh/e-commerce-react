import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IG3lADfkq2x5uYSd0KIefLYzhgEMW4UKhY9Y62M9GT2dUYiRgttdlPUxuOPFWT6euhRRnFlabOt828TmJrC867f00oRfJDb7V';
  const onToken = (token) => {
    console.log(token);
    alert('Payment succes');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
