# Setup

## create-next-app
```sh
$ docker-compose run --rm app yarn create next-app --example with-tailwindcss next13-supabase \
&& mv next13-supabase/* . && mv next13-supabase/.* . && rm -r next13-supabase\
&& mkdir src && mv pages styles src/
$ docker exec -it app sh
$ yarn add @heroicons/react@2.0.13 @supabase/auth-helpers-nextjs@0.5.2 @supabase/supabase-js@2.1.1 zustand@4.1.4 supabase@1.27.0 date-fns@2.29.3
$ yarn add next@13.0.6
```