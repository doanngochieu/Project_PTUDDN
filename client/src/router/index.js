// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import HotelDetails from '@/views/HotelDetails.vue'
import HomeView from '@/views/HomeView.vue'
import Join from '@/views/JoinHome.vue'
import JoinForm from '@/views/JoinForms.vue'
import SearchResults from '@/views/SearchResults.vue'
import Book from '@/views/Book.vue'
import AccountSettings from '@/views/account-settings/AccountSettings.vue'
import SettingDetails from '@/views/account-settings/SettingDetails.vue'
import BookingConfirmation from '@/views/BookingConfirmation.vue'
import Bookings from '@/views/Bookings.vue'
import BookingDetails from '@/views/BookingDetails.vue'
import Reviews from '@/views/Reviews.vue'
import ReviewDetails from '@/views/ReviewDetails.vue'

import stores from '@/stores/index.js'

// admin
import AdminLogin from '@/views/admin/AdminLogin.vue'
import HotelsManagement from '@/views/admin/HotelsManagement.vue'
import AdminHome from '@/views/admin/AdminHome.vue'
// admin payment
import AdminPayment from '@/views/admin/payment/AdminPayment.vue'
import InvoiceList from '@/views/admin/payment/InvoiceList.vue'
import InvoiceDetails from '@/views/admin/payment/InvoiceDetails.vue'
import StripeManagement from '@/views/admin/payment/StripeManagement.vue'
import Return from '@/views/admin/Return.vue'
import Refresh from '@/views/admin/Refresh.vue'
// admin bookings
import AllBookings from '@/views/admin/bookings/AllBookings.vue'
import AdminBookingDetails from '@/views/admin/bookings/BookingDetails.vue'
import book from '@/stores/book'
// admin room availability
import AvailabilityCalendar from '@/views/admin/room-availability/AvailabilityCalendar.vue'
import BookingCancellation from '@/views/BookingCancellation.vue'
import SavedHotels from '@/views/SavedHotels.vue'
// room 
import RoomDetails from '@/views/admin/room/RoomDetails.vue'
import RoomPhotos from '@/views/admin/room/RoomPhotos.vue'
import RoomAmenities from '@/views/admin/room/RoomAmenities.vue'
// review
import GuestReviews from '@/views/admin/review/GuestReviews.vue'

const routes = [
  // route for customer
  {
    path: '/',
    name: 'Home',
    component: HomeView
    //  meta: { requiresAuth: true } // Mark route as requiring authentication
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/join',
    name: 'Join',
    component: Join
  },
  {
    path: '/join/become-a-host',
    name: 'JoinForm',
    component: JoinForm
  },
  {
    path: '/hotels/:hotel_id',
    name: 'HotelDetails',
    component: HotelDetails
  },
  {
    path: '/search',
    name: 'SearchResults',
    component: SearchResults,
    props: (route) => ({
      location: route.query.location,
      checkInDate: route.query.checkInDate,
      checkOutDate: route.query.checkOutDate,
      adults: route.query.adults,
      children: route.query.children,
      rooms: route.query.rooms
    })
  },
  {
    path: '/book',
    name: 'Book',
    component: Book,
    meta: { requiresAuth: true }
  },
  {
    path: '/book/complete',
    name: 'BookingConfirmation',
    component: BookingConfirmation,
    props: (route) => ({
      bookingCode: route.query.bookingCode
    }),
    meta: { requiresAuth: true }
  },
  {
    path: '/account-settings',
    name: 'AccountSettings',
    component: AccountSettings,
    meta: { requiresAuth: true }
  },
  {
    path: '/account-settings/:details',
    name: 'SettingDetails',
    component: SettingDetails,
    meta: { requiresAuth: true }
  },
  {
    path: '/bookings',
    name: 'Bookings',
    component: Bookings,
    meta: { requiresAuth: true }
  },
  {
    path: '/bookings/:bookingCode',
    name: 'BookingDetails',
    component: BookingDetails,
    meta: { requiresAuth: true }
  },
  {
    path: '/bookings/:bookingCode/cancel',
    name: 'BookingCancellation',
    component: BookingCancellation,
    meta: { requiresAuth: true }
  },
  {
    path: '/saved-hotels',
    name: 'SavedHotels',
    component: SavedHotels,
    meta: { requiresAuth: true }
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews,
    meta: { requiresAuth: true}
  },
  {
    path: '/reviews/review-details',
    name: 'ReviewDetails',
    component: ReviewDetails,
    props: (route) => ({
      bc: route.query.bc, // booking code
      hid: route.query.hid, // hotel id
      hn: route.query.hn // hotel name
    }),
    meta: { requiresAuth: true}
  },
  // route for partner/admin
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin/hotels-management',
    name: 'HotelsManagement',
    component: HotelsManagement,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/:hotelId/home',
    name: 'AdminHome',
    component: AdminHome,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/:hotelId/payment',
    name: 'AdminPayment',
    component: AdminPayment,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/:hotelId/payment/invoices',
    name: 'InvoiceList',
    component: InvoiceList,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/:hotelId/payment/invoice-details',
    name: 'InvoiceDetails',
    component: InvoiceDetails,
    props: (route) => ({
      invoiceId: route.query.invoiceId
    }),

    meta: { requiresAuth: true }
  },
  {
    path: '/admin/:hotelId/payment/stripe-connect-account-management',
    name: 'StripeManagement',
    component: StripeManagement,
    meta: { requiresAuth: true }
  },
  // admin bookings
  {
    path: '/admin/:hotelId/bookings/all',
    name: 'AllBookings',
    component: AllBookings,
    meta: { requiresAuth: true }
  },
  {
    path: '/refresh/:connectedAccountId',
    name: 'Refresh',
    component: Refresh
  },
  {
    path: '/return/:connectedAccountId',
    name: 'Return',
    component: Return
  },
  {
    path: '/admin/:hotelId/bookings/booking-details',
    name: 'AdminBookingDetails',
    component: AdminBookingDetails,
    props: (route) => ({
      bc: route.query.bc, // booking code
    }),
    meta: {requiresAuth: true}
  },
  // admin room availability
  {
    path: '/admin/:hotelId/room-availability/availability-calendar',
    name: 'AvailabilityCalendar',
    component: AvailabilityCalendar,
    meta: {requiresAuth: true}
  },
  {
    path: '/admin/:hotelId/room/room-details',
    name: 'RoomDetails',
    component: RoomDetails,
    meta: {requiresAuth: true}
  },
  {
    path: '/admin/:hotelId/room/room-photos',
    name: 'RoomPhotos',
    component: RoomPhotos,
    meta: {requiresAuth: true}
  },
  {
    path: '/admin/:hotelId/room/room-amenities',
    name: 'RoomAmenities',
    component: RoomAmenities,
    meta: {requiresAuth: true}
  },
  {
    path: '/admin/:hotelId/review/guest-reviews',
    name: 'GuestReviews',
    component: GuestReviews,
    meta: {requiresAuth: true}
  },
  // Catch-all route (for 404s)
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue') // Lazy load the NotFound view
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Navigation guard to check authentication before entering protected routes
router.beforeEach((to, from, next) => {
  // check user authentication
  stores.dispatch('auth/checkAuth').then(async () => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (to.path.startsWith('/admin/')) {
        // if admin
        if (!stores.getters['auth/isAdminAuthenticated']) {
          next({ name: 'AdminLogin', query: { redirect: to.fullPath } }) // Redirect to login if not authenticated
        } else {
          // get all managing hotels 
          if (stores.getters['manageHotels/getManagingHotels'].length == 0 ) {
            await stores.dispatch('manageHotels/getAllManagingHotels')
          }
          if (to.params.hotelId) {
            // validate hotel
            const isValidHotelId = await stores.dispatch('manageHotels/validateHotel', {hotelId: to.params.hotelId})
            if (!isValidHotelId) {
              next({ name: 'HotelsManagement'}) // Redirect to hotel management dashboard if hotel id is invalid
            }else {
              stores.commit('manageHotels/setCurrentManagingHotelInformation', to.params.hotelId)
              next()
            }
          }else {
            next()
          }
        }
      } else {
        // if user
        if (!stores.getters['auth/isUserAuthenticated']) {
          next({ name: 'Login', query: { redirect: to.fullPath } }) // Redirect to login if not authenticated
        } else {
          next()
        }
      }
    } else {
      next() // Always allow non-protected routes
    }
  })
})

export default router
