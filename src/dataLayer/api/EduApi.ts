import { IEduProductModelSnapshotIn } from "../models/EduProductModel";
import {
  IEduArticleModelSnapshotIn,
  IEduArticleModel
} from "../models/EduArticleModel";
import { IEduCategoryModelSnapshotIn } from "../models/EduCategoryModel";
import { IEduCustomerSegmentModelSnapshotIn } from "../models/EduCustomerSegmentModel";
import { IEduFormChunkModelSnapshotIn } from "../models/EduFormChunkModel";
import { IEduFormDataModelSnapshotIn } from "../models/EduFormDataModel";
import { IEduFormFieldModelSnapshotIn } from "../models/EduFormFieldModel";
import { IEduProductSelectionModelSnapshotIn } from "../models/EduProductSelectionModel";
import { IEduSubCategoryModelSnapshotIn } from "../models/EduSubCategoryModel";
import { IEduTodoCategoryModelSnapshotIn } from "../models/EduTodoCategoryModel";
import { IEduTodoModelSnapshotIn } from "../models/EduTodoModel";
import {
  mock_article,
  mock_article_previews,
  mock_article_bookmark_id
} from "../mockdata";
import { IEduAdvisoryPackageModelSnapshotIn } from "../models/EduAdvisoryPackageModel";
import { IEduFIPackageModelSnapshotIn } from "../models/EduFIPackageModel";
//import {} from "../models/";

// /Feed
export const getFeed = async (
  filtertext?: string
): Promise<IEduArticleModelSnapshotIn[]> => {
  return [];
};
// /Articles/:ID
export const getArticle = async (
  id: string
): Promise<IEduArticleModelSnapshotIn> => mock_article[0];

// /Articles?subcategoryID=x
export const getArticles = async (
  subcategoryID: string
): Promise<IEduArticleModelSnapshotIn[]> => mock_article_previews;

// /Subcategories?categoryID=x&customerSegmentID=x
export const getSubCategories = async (
  categoryID: string,
  customerSegmentID: string
): Promise<IEduSubCategoryModelSnapshotIn[]> => [];

// /Categories?customerSegmentID=x
export const getCategories = async (
  customerSegmentID: string
): Promise<IEduCategoryModelSnapshotIn[]> => [];

// /Todos
export const getTodos = async (): Promise<any> => {};

// /Todos/:ID
export const getTodo = async (id: string): Promise<any> => {};

// /Bookmarks
export const getBookmarks = async (): Promise<IEduArticleModelSnapshotIn[]> =>
  mock_article_bookmark_id;

// /Products?customerSegmentID=x
export const getProducts = async (
  customerSegmentID: string
): Promise<IEduProductModelSnapshotIn[]> => [];

// /Products/:ID
export const getProduct = async (
  id: string
): Promise<IEduProductModelSnapshotIn> => ({
  id: "",
  title: "",
  cardImage: "",
  serviceCategory: "",
  cardText: "",
  productImage: "",
  loadingStatus: "done"
});

// /PackageGroup/Advisory?customerSegment=x
export const getAdvisoryPackages = async (
  customerSegment: string
): Promise<IEduAdvisoryPackageModelSnapshotIn[]> => [];

// /Packages/FI?customerSegment=x
export const getFIPackages = async (
  customerSegment: string
): Promise<IEduFIPackageModelSnapshotIn[]> => [];

// /PackageGroup/FI?customerSegment=x
export const getFIPackageGroup = async (
  customerSegment: string
): Promise<any> => ({
  id: "String",
  title: "String",
  description: "String",
  packageList: ["FIPackageID"]
});

// /PackageGroup/Advisory?customerSegment=x
export const getAdvisoryPackageGroup = async (
  customerSegment: string
): Promise<any> => ({
  id: "String",
  title: "String",
  description: "String",
  promotedPackage: "FIPackageID",
  packageList: ["FIPackageID"]
});

// /CustomerSegments
export const getCustomerSegments = async (): Promise<IEduCustomerSegmentModelSnapshotIn[]> => [];
