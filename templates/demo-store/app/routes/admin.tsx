import {type LoaderArgs, redirect} from '@shopify/hydrogen-remix';
import invariant from 'tiny-invariant';
import {getPrimaryShopDomain} from '~/data';

/*
  This route redirects you to your Shopify Admin
  by querying for your myshopify.com domain.
  Learn more about the redirect method here:
  https://developer.mozilla.org/en-US/docs/Web/API/Response/redirect
*/
export async function loader({context}: LoaderArgs) {
  const shop = await getPrimaryShopDomain(context);
  invariant(shop.primaryDomain, 'Missing primary domain url');

  const adminUrl = `${shop.primaryDomain.url}/admin`;
  return redirect(adminUrl);
}
