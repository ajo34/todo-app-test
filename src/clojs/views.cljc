(ns clojs.views
  (:require [clojs.actions :as actions]))


(defn- item-view [item]

  (if (:item/editing? (last item))
    [:li [:input {:on {:blur [[:actions/assoc-in [:list/todo-items (first item) :item/title] :event/target.value]
                              [:actions/assoc-in [:list/todo-items (first item) :item/editing?] false]]}
                  :value (:item/title (last item))
                  :class "edit"
                  :autofocus true}]]

    [:li {:key (first item)
          :on {:dblclick [[:actions/assoc-in [:list/todo-items (first item) :item/editing?] true]]}}
     [:input {:type :checkbox
              :class "checkbox"
              :checked (:item/completed? (last item))
              :on {:click [[:actions/assoc-in [:list/todo-items (first item) :item/completed?] :event/target.checked]]}}]
     [:p
      (:item/title (last item))]
     [:button {:class "x"
               :on {:click [[:actions/delete :list/todo-items [(first item)]]]}} "X"]]))


(defn- todo-list-view [{:keys [list/todo-items list/filter]}]
  [:div#list-container
   [:ul.todo-list
    (map item-view (actions/filter-items todo-items filter))]

   [:div#mark-all-container [:input#complete-all-box {:type "checkbox"
                                                      :checked (actions/all-complete? todo-items)
                                                      :on {:click [[:actions/mark-all-as :list/todo-items :event/target.checked]]}}]
    [:label "Mark all"]]
   [:div#list-footer


    [:p (let [n (count (actions/filter-items todo-items "Active"))] (str n " Item" (if (= n 1) "" "s") " left"))]
    [:select {:value filter
              :on {:change [[:actions/assoc-in [:list/filter] :event/target.value]]}}
     [:option {:value "All" :selected (= filter "All")} "All"]
     [:option {:value "Active" :selected (= filter "Active")} "Active"]
     [:option {:value "Completed" :selected (= filter "Completed")} "Completed"]]

    [:button {:on {:click [[:actions/reset]]}} "RESET!"]

    [:button {:on {:click [[:actions/delete :list/todo-items (keys (actions/filter-items todo-items "Completed"))]]}}
     "Clear completed"]]])



(defn main-view [state]
  [:div.appapp
   [:h1 "List"]

   [:input.adder {:on {:keyup [[:actions/add-on-enter :list/todo-items :event/target.value :event/key]]}
                  :autofocus true}]

   ;(display-view state)
   (todo-list-view state)])